import { JSDOM } from 'jsdom';

function extractAnchors(doc: string, container: string) {
  const dom = new JSDOM(doc);

  const document = dom.window.document;

  const containerEl = document.querySelector(container);

  if (!containerEl) {
    throw new Error('Container not found');
  }

  const anchors = containerEl.querySelectorAll<"a">('a');

  const links: string[] = [];

  for (let a of anchors) {
    links.push(a.href);
  }

  return links
}

async function download(url: string): Promise<string> {
 
  const resp = await fetch(url);
  
  if (!resp.ok) {
    throw new Error('Bad fetch response');
  }

  const doc = await resp.text();

  return doc;
}

export async function getAnchors(url: string, selector: string): Promise<string> {
  const doc = await download(url);

  const links = extractAnchors(doc, selector);

  return links.join('\n');
}

if (require.main == module) {
  download('https://www.bt-tt.com/html/11/29092.html')
    .then(doc => {
      return extractAnchors(doc, '.main .container .bot');
    })
    .then(links => {
      console.log(links.join('\n'));
    })
    .catch(err => {
      console.error(err.message);
    });
}
