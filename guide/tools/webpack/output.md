# Output

## `output: object`

### `output.filename`

* `string`
* `function (pathData, assetInfo) => string`

Determins the name of each output bundle. The bundle is written to the directory specified by the `output.path` option.

For a single `entry` point, this can be a static name.

* `[name].bundle.js` Using entry name

```js
module.exports = {
  output: {
    filename: '[name].bundle.js'
  }
}
```

* `[id].bundle.js` Using internal chunk id

```js
module.exports = {
  output: {
    filename: '[id].bundle.js'
  }
}
```

* `[contenthash].bundle.js` Using hashes generated from the generated content.

```js
module.exports = {
  output: {
    filename: '[contenthash].bundle.js'
  }
}
```

* `[name].[contenthash].bundle.js`

```js
module.exports = {
  filename: '[name].[contenthash].bundle.js'
}
```

* Using function to return the filename:

```js
(pathData) => {
    return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
}
```

You can create folder structure in the name.

The object passed to function:

```ts
type PathData = {
  hash: string;
  hashWithLength: (number) => string;
  chunk: Chunk | ChunkPathData;
  module: Module | ModulePathData;
  contentHashType: string;
  contentHash: string;
  contenthashWithLength: (number) +> string;
  filename: string;
  url: string;
  runtime: string | SortableSet<string>;
  chunkGraph: ChunkGraph;
};

type ChunckPathData = {
  id: string | number;
  name: string;
  hash: string;
  hashWithLength: (number) => string;
  contentHash: Record<string, string>;
  contentHashWithLength: Record<stirng, (number) +> string>;
};

type ModulePathData = {
  id: string | number;
  hash: string;
  hashWithLength: (number) => string;
}
```

### `output.iif`: boolean

## Entry specific output

By default, the output filename for the entry chunk is extracted from `output.filename` but you can specify a custom output filename for a specific entry:

```js
module.exports = {
    entry: {
        app: './app.js',
        home: {
            import: './concat.js',
            filename: 'pages/[name].js'
        },
        about: {
            import: './about.js',
            filename: 'pages/[name].js'
        },
    },
};
```

## HtmlWebpackPlugin

```sh
pnpm add -D html-webpack-plugin
```

`webpack.config.js`:

```js
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }) 
  ],
}
```

`HtmlWebpackPlugin` by default will generate its own `index.html`.

Pass a hash of configuration options:

* `filename: string | Function`. Default `index.html`

The file to write the HTML to. You can specify a subdirectory here too.

* `template: string`

Webpack relative or absolute path to the template. By default it will use `src/index.ejs` if it exists.

You can set a loader directly for the template:

```js
new HtmlWebpackPlugin({
  template: '!!handlebars-loader!src/index.hbs'
})
```

Or set a loader using the `module.rules`:

```js
{
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.hbs'
    })
  ]
}
```

* `templateContent: string | Function | boolean`. Default `false`.

Can be used instead of `template` to provide an inline template.

* `templateParameters: boolean | Object | Function` Default `false`.

Overwrite parameters used in the template.

* `inject: boolean | string`. Default `true`

`true | false | head | body`.

When passing `body`, all JS resources will be placed at the bottom of the body element.

`head` will place the scripts in the head element.

`true` will add it to the head/body depending on the `scriptLoading` option.

* `publicPath: string | auto` Default `auto`

* `scriptLoading: blocking | defer | module | systemjs-module` Default `defer`

* `favicon: string`

* `meta: object`

```js
meta: {
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
}
```

* `base: 'object|string|false'` Default `false`.

* `minify: 'bool|object'`. `true` if `mode: production` otherwise `false`.

* `hash: boolean`. Default `false`.

If `true` then append a unique webpack compilation hash to all included scripts and CSS files like: `main.js?hash=compilation_hash`.

* `cache: true`

* `showErrors: true`

* `chunks: '?'`

Allows you to add only some chunks.

```js
{
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app']
    })
  ]
}
```

* `chunksSortMode: 'none|auto|manual|Function'`

* `excludeChunks: []string`

Skip some chunks.

```js
{
  plugins: [
    new HtmlWebpackPlugin({
      excludeChunks: ['dev-helper']
    })
  ]
}
```

* `xhtml: false`

To generate more than one HTML file, declare the plubin more than once in your plubins array:

```js
module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: 'src/assets/test.html'
    })
  ]
}
```

If you already have a template loader, you can use it to parse the template.
