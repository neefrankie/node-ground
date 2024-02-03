import { renderFile } from './render';
import { resolve } from 'node:path';
import { mkdir } from 'node:fs/promises';
import { PackageJSON } from './lib/PackageJSON';
import React from 'react';
import { App } from './template/App';
import { ScriptProps } from './template/Script';
import { bootstrapLink } from './template/Style';

export function TestApp(
  props: {
    bootstrapVersion: string,
  }
) {
  const baseUrl = '/images/fav';

  const bodyJs: ScriptProps[] = [
    {
      src: '/src/main.tsx',
      type: 'module',
    }
  ];

  const styleLinks = [
    bootstrapLink(props.bootstrapVersion),
  ];

  return (
    <App
      title='{{Title}}'
      baseHref='/'
      iconBaseUrl={baseUrl}
      fullheight={true}
      styles={styleLinks}
      bodyScripts={bodyJs}
    />
  )
}

async function mkDirAll(...paths: string[]) {
  const dir = resolve(...paths);
  await mkdir(dir, { recursive: true});

  return dir;
}

async function main() {
  const dir = await mkDirAll(__dirname, '../dist');

  const to = resolve(dir, 'index.html');

  const pkg = await (new PackageJSON(process.cwd())).load();

  const bsv = pkg.bootstrapVersion;
  
  await renderFile(<TestApp bootstrapVersion={bsv} />, to);

  console.log(`Dev html created: ${to}`);
}

if (require.main === module) {
  main().catch(console.error);
}

