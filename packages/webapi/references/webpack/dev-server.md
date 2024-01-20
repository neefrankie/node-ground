# Development Tool

## webpack-dev-server

```sh
pnpm add -D webpack-dev-server
```

```js
module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};
```

The route `/webpack-dev-server` will show where files files are served.

To manually recompile the bundle, navigate to `/webpack-dev-server/invalidate` will invalidate the current compilation of the bundle.

HTML template is required to serve the bundle, usually an `index.html` file.

Usage via CLI:

```sh
npx webpack serve
```


To use `webpack-dev-server`, install it first. Then in the configuration file tell the dev server where to look for files:

```js
module.exports = {
  devServer: {
    static: './dist'
  },
  optimization: {
    runtimeChunk: 'single',
  },
}
```

It serves bundled files from the directory defined in output.path. Files will available under `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]`

It doesn't write any output files after compiling. It keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.

Add script to package.json: `"start": "webpack serve --open"`

## webpack-dev-middleware

```sh
pn add -D express webpack-dev-middleware
```

`webpack.config.js`:

```js
module.exports = {
    output: {
        publicPath: '/'
    }
}
```

See `server.js` file.
