import { renderToStaticMarkup } from 'react-dom/server';
import { writeFile } from 'node:fs/promises';

/**
 * Render's React component to html string.
 * Usually used to generate index.html in a project's root.
 */
export function renderString(app: JSX.Element): string {
  const htmlStr = renderToStaticMarkup(app);

  return `<!DOCTYPE html>
  ${htmlStr}
  `;
}

export async function renderFile(app: JSX.Element, toFile: string) {
  const html = renderString(app);

  await writeFile(toFile, html, { encoding: 'utf8' });
}
