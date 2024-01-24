import { mkdir, readdir } from 'fs/promises';
import { join } from 'node:path';

describe('make directory', () => {
  test('make recursive directory', async () => {
    const projectFolder = join(__dirname, 'test', 'project');
    const createDir = await mkdir(projectFolder, { recursive: true});

    console.log(`created ${createDir}`);
  });
});

describe('read dir', () => {
  test('read directory', async () => {
    const files = await readdir(__dirname);

    for (const file of files) {
      console.log(file);
    }
  });
});
