# Production

## Mode

`string = 'produciton' | 'development'`

```js
module.exports = {
    mode: 'development',
    optimization: {
        usedExports: true
    }
}
```

Or pass it as a CLI arg:

```sh
webpack --mode=development
```
