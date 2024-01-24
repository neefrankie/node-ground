import { mkdir } from 'fs/promises';
import { join } from 'node:path';

describe('make directory', () => {
  test('make recursive directory',async () => {
    const projectFolder = join(__dirname, 'test', 'project');
    const createDir = await mkdir(projectFolder, { recursive: true});

    console.log(`created ${createDir}`);
  });
});
