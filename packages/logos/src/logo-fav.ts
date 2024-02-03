import { resolve } from 'node:path';
import { ImageProcessor, SharpSize, isSvg, } from './lib/processor';
import { mkDirAll } from './lib/dir';
import { fav } from './lib/fav';

type Config = {
  input: string;
  sizes?: number[],
  outDir?: string;
}

export async function produceLogoAndFav(
  config: Config,
) {
  const {
    input,
    sizes = [100, 200, 300],
    outDir = resolve(__dirname, '../dist'),
  } = config;

  // Ensure output directories exists
  const [logoDir, favDir] = await Promise.all([
    mkDirAll(resolve(outDir, 'logos')),
    mkDirAll(resolve(outDir, 'fav'))
  ]);

  // Initiate ImageProcessor
  const p = (new ImageProcessor(input, logoDir))
    .setSizes(sizes.map(SharpSize.square));

  // If input is svg, optimize and save it.
  if (isSvg(input)) {
    await p.optmizeSvg();
  }

  // Output multiple pngs
  await p.toPng();

  // Generate favicons.
  await fav(input, favDir);
}

async function main() {
  const configs: Config[] = [
    {
      input: resolve(__dirname, '../assets/logos/tc-logo.png'),
      outDir: resolve(__dirname, '../dist/tc')
    },
    {
      input: resolve(__dirname, '../assets/logos/tuzhi.svg'),
      outDir: resolve(__dirname, '../dist/tuzhi'),
    }
  ];

  await Promise.all(
    configs.map(produceLogoAndFav)
  )
}

if (require.main === module) {
  main().catch(console.error);
}

