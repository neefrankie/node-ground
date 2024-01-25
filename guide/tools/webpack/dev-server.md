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

### Options

* `allowedHosts: auto | all | string[]`

Services allowed to access the dev server.

* `bonjour: false | object`

Broadcast the server via ZeroConf networking on start.

* `client: object`

```js
{
  client: {
    logging: 'info',
    overlay: true,
    progress: true,
    reconnect: true,
    webSocketTransport: 'ws',
    webSocketURL: 'ws://0.0.0.0:8080/ws'
  }
}
```

* `compress: true`

* `devMiddleware: object`

* `headers: {}`

* `host: local-ip | local-ipv4 | local-ipv6 | string`

* `host: true`

* `liveReload: true`

* `proxy: object | [object, function]`

```js
{
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}
```

A request to `/api/users` will proxy the request to `http://localhost:3000/api/users`.

If you don't want `/api` to be passed along, rewrite the path:

```js
'/api': {
  target: 'http://localhost:3000',
  pathRewriter: {'^/api': ''},
}
```

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
