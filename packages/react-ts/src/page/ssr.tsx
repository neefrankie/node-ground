import { renderToStaticMarkup, renderToPipeableStream } from 'react-dom/server';
import { Response } from 'express';
import { App } from './App';
import { LoginPage } from './LoginPage';
import React from 'react';

/**
 * Render's React component to html string.
 * Usually used to generate index.html in a project's root.
 */
export function renderToString(app: JSX.Element): string {
  const htmlStr = renderToStaticMarkup(app);

  return `<!DOCTYPE html>
  ${htmlStr}
  `;
}

export function renderToStream(app: JSX.Element, res: Response) {
  const { pipe } = renderToPipeableStream(app, {
    onShellReady() {
      res.setHeader('Content-Type', 'text/html');
      pipe(res);
    }
  })
}

function AppLogin() {
  return (
    <App
      title='Login'
      scripts={['login.bundle.js']}
    >
      <LoginPage />
    </App>
  );
}

export function renderAppLogin(res: Response) {
  renderToStream(<AppLogin/>, res);
}
