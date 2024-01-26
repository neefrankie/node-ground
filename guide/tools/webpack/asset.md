# Assert Management

## Loading CSS

To `import` a CSS file from within a JS module, install `style-loader` and `css-loader`:

```sh
pnpm add --save-dev style-loader css-loader
```

Add them to `module`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
};
```

In js:

```js
import './style.css';
```

Each loade applies transformation tothe processed resource.

A chain is executed in reverse order. The frist loade passes its result to the next one. Finally, webpack expects JS to be returned by teh last loader in the chain.

The above order of loaders should be maintained:

`style-loader` comes first and followed by `css-loader`.

`css-loader` handle `import` in JS while `style-loader` injects `style` tag into HTML.

DO NOT use `style-loader` together with `MiniCssExtractPlugin.loader`!

When a module imporitng `./style.css` is run, a `<style>` tag with the stringified css will be inserted into the `<head>` of HTML file.


### HMR with CSS

