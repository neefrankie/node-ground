import { readFile, writeFile, access, constants } from 'node:fs/promises';
import { homedir } from 'node:os';
import { resolve } from 'node:path';
import { chunk } from 'lodash';

async function readIDs(): Promise<string[]> {
  const text = await readFile('ids.txt', { encoding: 'utf8'} );

  const ids = text.split('\n').filter(id => id !== '');

  return ids
}

function getFileName(id: string): string {
  return resolve(homedir(), 'code/story', `${id}.json`)
}

async function fileExists(id: string): Promise<boolean> {
  const name = getFileName(id);
  try {
    await access(name, constants.F_OK);
    return true;
  } catch {
    console.log(`File not found: ${name}`);
    return false;
  }
}

async function fetchStory(id: string): Promise<string> {

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
  const fileName = getFileName(id);
  await writeFile(fileName, data, {encoding: 'utf8'});
  console.log(`Saved file ${fileName}`);
}

async function crawlAndSave(id: string) {
  
  const found = await fileExists(id);
  if (found) {
    return;
  }
  
  console.log(`Start getting story ${id}`);
  try {
    const content = await fetchStory(id);
    await saveStory(id, content);
  } catch (err) {
    console.log(`Error crawling story ${id}`);
  }
}

async function startCrawling() {
  const ids = await readIDs();
  const grouped = chunk(ids, 20);

  for (let gids of grouped) {
    await Promise.all(gids.map(crawlAndSave));
  }
}

startCrawling()
  .catch(console.error);
