# Hot Module Replacement

## Enable HMR

Update webpack-dev-server configuration. Enabled by default.

For `webpack-dev-server`, use the `webpack-hot-middleware` to enable HMR on custom server.

```js
module.exports = {
  devServer: {
    hot: true,
  }
}
```
