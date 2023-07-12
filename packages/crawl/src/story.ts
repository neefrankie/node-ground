import { readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { resolve } from 'node:path';
import { chunk } from 'lodash'

async function readIDs(): Promise<string[]> {
  const text = await readFile('ids.txt', { encoding: 'utf8'} );

  const ids = text.split('\n');

  return ids
}

async function getContent(id: string): Promise<string> {

  const url = `http://localhost:8100/story/${id}`;

  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })

  if (!resp.ok) {
    throw new Error(`HTTP error! status: ${resp.status}`)
  }

  return resp.text();
}

async function saveStory(id: string, data: string) {
  const fileName = resolve(homedir(), 'code/story', `${id}.json`)
  await writeFile(fileName, data, {encoding: 'utf8'});
  console.log(`Saved file ${fileName}`);
}

async function crawlAndSave(id: string) {
  console.log(`Start getting story ${id}`);

  try {
    const content = await getContent(id);
    await saveStory(id, content);
  } catch (err) {
    console.log(`Error crawling story ${id}`);
  }
}

async function download() {
  const ids = await readIDs();
  const grouped = chunk(ids, 20);

  for (let gids of grouped) {
    await Promise.all(gids.map(crawlAndSave));
  }
}

download()
  .catch(console.error);
