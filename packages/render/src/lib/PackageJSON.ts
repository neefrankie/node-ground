import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

interface PkgFile {
  name: string;
  version: string;
  devDependencies: {
    bootstrap: string;
  };
}

export class PackageJSON {
  private filename: string;
  private content?: PkgFile;

  constructor(parentDir: string) {
    this.filename = resolve(parentDir, 'package.json');
  }

  async load() {
    const content = await readFile(this.filename, {encoding: 'utf-8'});
    this.content = JSON.parse(content);
    return this;
  }

  get bootstrapVersion(): string {
    if (!this.content) {
      throw new Error('call load first');
    }
    
    return this.content?.devDependencies.bootstrap.replace('^', '')
  }
}
