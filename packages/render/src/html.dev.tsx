import { renderFile } from './render';
import { resolve } from 'node:path';
import { mkdir } from 'node:fs/promises';
import { PackageJSON } from './lib/PackageJSON';
import React from 'react';
import { footerMatrix } from './lib/data';
import { App } from './template/App';
import { Footer, CopyRight } from './template/Footer';
import { ScriptProps } from './template/Script';

export function TestApp(
  props: {
    bootstrapVersion: string,
  }
) {
  const baseUrl = 'https://www.ftacademy.cn/images/favicons';
  const iconSizes = [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024];

  const headJs: ScriptProps[] = [
    {
      src: 'https://js.stripe.com/v3/',
      type: 'module',
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-W2PGS8NT21',
      async: true,
    }
  ];
  const bodyJs: ScriptProps[] = [
    {
      src: '/src/main.tsx',
      type: 'module',
    }
  ];

  const year = (new Date()).getFullYear();

  return (
    <App
      title='图知'
      baseHref='/'
      iconBaseUrl={baseUrl}
      iconSizes={iconSizes}
      fullheight={true}
      bootstrapVersion={props.bootstrapVersion}
      headScripts={headJs}
      bodyScripts={bodyJs}
      footer={
        <Footer
          matrix={footerMatrix}
          copyRight={
            <CopyRight
              brand='图知'
              year={`${year}`}
            />
          }
        />
      }
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

  const pkg = await (new PackageJSON(resolve(__dirname, '../../'))).load();

  const bsv = pkg.bootstrapVersion;
  
  await renderFile(<TestApp bootstrapVersion={bsv} />, to);

  console.log(`Dev html updated: ${to}`);
}

if (require.main === module) {
  main().catch(console.error);
}

