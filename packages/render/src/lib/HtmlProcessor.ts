import { JSDOM } from 'jsdom';
import { readFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

function isCssLink(link: HTMLLinkElement) {
  return link.getAttribute('rel') === 'stylesheet';
}

function isLocalResouce(href: string) {
  return !href.startsWith('http');
}

export class HtmlProcessor {
  private dom: JSDOM;

  constructor (dom: JSDOM) {
    this.dom = dom;
  }

  // Change the href value of link.
  // The modied value will be `prefix + basename(href)`
  changeStylePath(prefix: string) {
    const document = this.dom.window.document;

    const links = document.querySelectorAll('link');

    for (const link of links) {

      if (!isCssLink(link)) {
        continue;
      }

      const href = link.getAttribute('href');
      if (!href) {
        continue;
      }

      if (!isLocalResouce(href)) {
        continue;
      }

      console.log(`Processing href ${href}`);

      const newHref = resolve(prefix, basename(href));

      link.setAttribute('href', newHref);

      console.log(`href change to ${newHref}`);
    }

    return this;
  }

  changeScriptPath(prefix: string): HtmlProcessor {
    const document = this.dom.window.document;

    document.querySelectorAll('script')
      .forEach(script => {
        const src = script.getAttribute('src');
        
        if (src && !src.startsWith('http')) {

          const newSrc = resolve(prefix, basename(src));

          console.log(`src change to ${newSrc}`);

          script.setAttribute('src', newSrc);
        }
      });

    return this;
  }

  removeAllScript() {
    const document = this.dom.window.document;

    const scripts = document.querySelectorAll('script');
    for (let s of scripts) {
      if (s.parentNode) {
        s.parentNode.removeChild(s);
      }
    }

    return this;
  }

  toString(): string {
    return this.dom.serialize();
  }

  private async inlineCss(document: Document, link: HTMLLinkElement, relativeTo: string) {
    const href = link.getAttribute('href');
    if (!href) {
      return;
    }

    const filename = join(relativeTo, href);

    const css = await readFile(filename, { encoding: 'utf8'});

    const styleTag = document.createElement('style');
    styleTag.textContent = css;

    const parent = link.parentNode;
    if (parent) {
      parent.appendChild(styleTag);
      parent.removeChild(link);
    }
  }

  async inlineStyles(relativeTo: string) {
    const document = this.dom.window.document;

    const links = document.querySelectorAll('link')

    for (const link of links) {
      
      if (!isCssLink(link)) {
        continue;
      }

      const href = link.getAttribute('href');
      if (!href) {
        continue;
      }

      if (!isLocalResouce(href)) {
        continue;
      }

      await this.inlineCss(document, link, relativeTo);
    }

    return this;
  }

  replaceReactRoot(id: string, replacer: string) {
    const doc = this.dom.window.document;
    const elem = doc.getElementById(id);
    if (!elem) {
      return;
    }

    const parent = elem.parentNode;
    if (!parent) {
      return;
    }

    parent.removeChild(elem);
    parent.textContent = replacer;

    return this;
  }
}

async function main() {
  const fileName = join(process.cwd(), 'dist/index.html');

  const dom = await JSDOM.fromFile(fileName);

  const html = new HtmlProcessor(dom);

  await html.inlineStyles(join(process.cwd(), 'dist'));
  html.removeAllScript();
  
  console.log(html.toString());
}

if (require.main === module) {
  main().catch(console.error);
}
