import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'path';
import { optimize } from 'svgo';
import sharp, { PngOptions, ResizeOptions, Sharp } from 'sharp';
import { extractName, mkDirDist } from './dir';

export function isSvg(name: string): boolean {
  return name.endsWith('.svg');
}

export class SharpSize {
  private resize?: ResizeOptions;


  static square(size: number): ResizeOptions {
    return {
      width: size,
      height: size,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0}
    }
  }
}

export class ImageProcessor {
  // Path to input file.
  private inputFile: string;
  private outDir: string;
  private nameNoExt: string;

  private svgContent: string = '';
  private buffer: Buffer;

  private pngOpt?: PngOptions;
  private resizeOpt: ResizeOptions[] = [];
  
  /**
   * 
   * @param input - absolute path to input file.
   * @param outDir - where to put the output files
   * @param name - output file name. If missing, use input file name.
   */
  constructor (input: string, outDir: string, name?: string) {
    this.inputFile = input;
    this.outDir = outDir;
    if (name) {
      this.nameNoExt = extractName(name);
    } else {
      this.nameNoExt = extractName(input);
    }
  }

  // For svg file, read if as utf-8 string.
  async loadSvg() {
    if (!isSvg(this.inputFile)) {
      return;
    }

    // If svg already loaded, stop.
    if (this.svgContent) {
      return this;
    }

    this.svgContent = await readFile(this.inputFile, { encoding: 'utf-8' });

    return this;
  }

  // Turn svg strting into Buffer, or read input file
  // directly as Buffer if it is a binary format.
  async fillBuffer() {
    // If input is svg, turn the string into buffer.
    if (this.svgContent) {
      if (!this.buffer) {
        this.buffer = Buffer.from(this.svgContent);
      }
      return;
    }

    // otherwise read the file as buffer.
    this.buffer = await readFile(this.inputFile);
    return this;
  }

  // Optimize svg and save it to file.
  async optmizeSvg() {
    await this.loadSvg();

    const outFile = resolve(this.outDir, `${this.nameNoExt}.svg`);
    const result = optimize(this.svgContent);

    await writeFile(outFile, result.data);

    console.log('Saved SVG: ', outFile);

    // Update svg content so that the optimized version
    // is used when converting to png.
    this.svgContent = result.data;
    return this;
  }

  private sharp(): Sharp {
    return sharp(this.buffer);
  }

  // Set sharp resize options.
  setSizes(opts: ResizeOptions[]) {
    this.resizeOpt = opts;
    return this;
  }

  // Add a sharp resize option.
  addSize(opt: ResizeOptions) {
    this.resizeOpt.push(opt);
    return this;
  }

  withPng(opts: PngOptions) {
    this.pngOpt = opts;
    return this;
  }

  private async createPng(resize?: ResizeOptions) {
    await this.fillBuffer();

    const b = await this.sharp()
      .png(this.pngOpt)
      .resize(resize)
      .toBuffer();

    // add size suffix if exists
    let parts: string[] = [];
    if (resize) {
      parts.push('-');
      if (resize.width) {
        parts.push(`${resize.width}`)
      }
      parts.push('x');
      if (resize.height) {
        parts.push(`${resize.height}`);
      }
    }

    const outFile = resolve(this.outDir, `${this.nameNoExt}${parts.join('')}.png`);

    await writeFile(outFile, b);

    console.log('Saved PNG: ', outFile);

    return this;
  }

  // Convert input file to pngs.
  // It will output a single file if there's no resize options.
  // If there are multiple resize options, multiple files will
  // be generated with size appended to file name.
  async toPng() {
    if (this.resizeOpt.length == 0) {
      return this.createPng();
    }

    await Promise.all(this.resizeOpt.map((size) => this.createPng(size)));

    return this;
  }
}

if (require.main === module) {
  const main = async function () {
    const input = resolve(__dirname, '../../assets/ftc/brand-ftc-logo-square.svg');
    const outDir = await mkDirDist('test');

    const p = new ImageProcessor(input, outDir);

    await p.toPng();

    p.setSizes([SharpSize.square(300)]);
    await p.toPng();
  }
  
  main().catch(console.error);
}
