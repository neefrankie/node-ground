# Webpack Usage Guide

## Getting Started

### Install

```sh
pnpm add webpack webpack-cli --save-dev
```

To prevent accidental publish of code, remove `main` entry in `package.json`, and add `"private": true`.

## Creating a Bundle

Run `npx webpack` (`pnpm dlx webpack` not working), which will take script at `src/index.js` as teh entry point, and will generate `dist/main.js` as the output. `npx` runs the webpack binary `./node_modules/.bin/webpack`.

### Modules

Webpack will no alter any code other than `import` and `export` statements. If you are using other ES2015 features, use a transpiler such as Babel via webpack's loader system.

### Using a Cofiguration

Create `webpack.config.js` under project root. Or use webpack-cli's `init` command:

```sh
npx webpack init
```

Run `npx webpack --config webpack.config.js`.

If a `webpack.config.js` is present, the `webpack` command picks it up by default.

### NPM Scripts

In `package.json`:

```json
{
    "scripts": {
        "build": "webpack"
    }
}
```

Run `pnpm build`.

Custom parameters can be passed to webpack by adding two dasheds between the `npm run build` command and your parameters: `npm run build -- --color`.



## Development

### Using source maps

add `devtool: 'inline-source-map'`

### Choosing a Development Tool

Options to automatically compile code whenever it changes:

1. webpack's Watch Mode: in `package.json`, add script `"watch": "webpack --watch"`
2. webpack-dev-server. See dev-server.md
3. webpack-dev-middleware


