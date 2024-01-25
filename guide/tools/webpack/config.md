# Configuration

## Use a different configuration file

Use `--config` flag:

```json
{
    "scripts": {
        "build": "webpack --config prod.config.js"
    }
}
```

## Configuration Languages

### TypeScript

First install the necessary dependencies:

```sh
pnpm add --save-dev typescript ts-node @types/node @types/webpack
```

See `webpack.config.ts` and `tsconfig.json` files.

If `compilerOptions.module` is `CommonJS` in `tsconfig.json`, the setting is complete, else webpack will fail with an error because `ts-node` does not support any module syntax other than `commonjs`.

3 solutions to this issue:

* Modify `tsconfig.json`.

```json
{
    "compilerOptions": {
        "target": "ES5",
        "module": "CommonJS"
    }
}
```

* Modify `tsconfig.json` and add settings for `ts-node`.

Keep `module`: `ESNext` for `tsc`. Override for `ts-node`:

```json
{
    "compilerOptions": {
        "module": "ESNext",
    },
    "ts-node": {
        "compilerOptions": {
            "module": "CommonJS"
        }
    }
}
```

* Install `tsconfig-paths` and create a separate TS cofiguration specifically for your webpack configs:

`tsconfig-for-webpack-config.json`:

```json
{
    "compilerOption": {
        "module": "CommonJS",
        "target": "ES5",
        "esModuleInterop": true
    }
}
```

`ts-node` can resolve `tsconfig.json` file using the environment variable provided by `tsconfig-paths`.

Set the environment variable `process.env.TS_NODE_PROJECT` provided by `tsconfig-paths` in `package.json`:

```json
{
    "scripts": {
        "build": "cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack"
    }
}
```

## Entry and Context

Entry: where webpack looks to start building the bundle.

Context: an absolute string to the directory that contains the entry files.

### `context: string`

The base directory, an absolute path, for resolving entry points and loaders from the configuration.

By default, the current working directory of Node.js is used.

```js
module.exports = {
    context: path.resolve(__dirname, 'app'),
}
```

### entry

The point or points where to start the application bundling process. If an array is passed then all items will be processed.

If a string or array of strings is passed, the chunk is named `main`.

If an object is passed, each key is the name of a chunk.

If an object is passed the value might be a string, array of strings, or a descriptor:

```js
module.exports = {
    entry: {
        home: './home.js',
        shared: ['react', 'react-dom', 'redux', 'react-redux'],
        catalog: {
            import: './catalog.js',
            filename: 'pages/catalog.js',
            dependOn: 'shared',
            chunkLoading: false,
        },
        personal: {
            import: './personal.js',
            filename: 'pages/personal.js',
            dependOn: 'shared',
            chunkLoading: 'jsonp',
            asyncChunks: true,
            layer: 'name of layer',
        },
    },
};
```

### Output filename

See Entry Specific Output in output.md

### Dependencies

By default, every entry chunk stores all the modules that it uses. With `dependOn` option you can share the modules from one entry chunk to another:

```js
module.exports = {
    entry: {
        app: {
            import: './app.js',
            dependOn: 'react-vendors',
        },
        'react-vendors': [
            'react',
            'react-dom',
            'prop-types'
        ],
    },
};
```

The app chunk will not contain the modules that `react-vendors` have.


