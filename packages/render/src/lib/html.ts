import { JSDOM } from 'jsdom';
import { basename, resolve } from 'node:path';

/**
 * Add prefix to css and js bundle.
 */
export async function prependAssetsUrl(fileName: string, urlPrefix: string): Promise<string> {
  const dom = await JSDOM.fromFile(fileName);

  const document = dom.window.document;

  //
  document.querySelectorAll('link')
    .forEach(link => {

      const href = link.getAttribute('href');

      console.log(`Processing href ${href}`);

      if (href && !href.startsWith('http')) {

        const prefixed = resolve(urlPrefix, basename(href));

        console.log(`Path prefixed ${prefixed}`);

        link.setAttribute('href', prefixed);
      }
    });

  document.querySelectorAll('script')
    .forEach(script => {
      const src = script.getAttribute('src');

      if (src && !src.startsWith('http')) {

        const prefixed = resolve(urlPrefix, basename(src));

        console.log(`Path prefixed ${prefixed}`);

        script.setAttribute('src', prefixed);
      }
    });

  return dom.serialize();
}

