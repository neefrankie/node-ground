import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function mkDirAll(...paths: string[]) {
  const dir = resolve(...paths);
  await mkdir(dir, { recursive: true});

  return dir;
}
