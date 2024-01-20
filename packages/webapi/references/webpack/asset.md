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
