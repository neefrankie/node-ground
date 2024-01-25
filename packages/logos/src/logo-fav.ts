import { resolve } from 'node:path';
import { ImageProcessor, SharpSize, isSvg, } from './lib/processor';
import { mkDirAll } from './lib/dir';
import { fav } from './lib/fav';

type Config = {
  input: string;
  sizes?: number[],
  outDir?: string;
}

export async function produceLogoAndFav(
  config: Config,
) {
  const {
    input,
    sizes = [100, 200, 300],
    outDir = resolve(__dirname, '../dist'),
  } = config;

  const [_, favDir] = await Promise.all([
    mkDirAll(outDir),
    mkDirAll(resolve(outDir, 'fav'))
  ])

  const p = (new ImageProcessor(input, outDir))
    .setSizes(sizes.map(SharpSize.square));

  if (isSvg(input)) {
    await p.optmizeSvg();
  }

  await p.toPng();

  await fav(input, favDir);
}

async function main() {
  const configs: Config[] = [
    {
      input: resolve(__dirname, '../assets/logos/tc-logo.png'),
      outDir: resolve(__dirname, '../dist/tc')
    },
    {
      input: resolve(__dirname, '../assets/logos/tuzhi.svg'),
      outDir: resolve(__dirname, '../dist/tuzhi'),
    }
  ];

  await Promise.all(
    configs.map(produceLogoAndFav)
  )
}

if (require.main === module) {
  main().catch(console.error);
}

