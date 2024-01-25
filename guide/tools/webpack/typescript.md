# TypeScript

## Basic Setup

```sh
pnpm add -D typescript ts-loader
```

Setup configuration to support JSX and compile TS down to ES5:

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

Configure webpack:

```js
module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```

Take `lodash` for example:

```ts
import * as _ from 'lodash';
```

There's no defualt export present in `lodash` definitions.

To keep `import _ from 'lodash';` syntax in TS, set `allowSyntheticDefaultImports: true` and `esModuleInterop: true` in `tsconfig.json`.

## Loader

`ts-loader` use `tsc` and relies on `tsconfig.json`. Make sure to avoid setting `module` to `CommonJS` or webpack won't be able to tree-shake code.

Alternatvely you can use `babel-loader` and `@babel/preset-typescript`.

## Importing Other Asserts

To use non-code assets, defer the type of these imports. This requires a `custom.d.ts` file.

`custom.d.ts`

```ts
declare module '*.svg' {
    const content: any;
    export default content;
}
```
