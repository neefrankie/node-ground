# Tailwind

## VS Code

Install `Tailwind CSS Intellisense`.

## Optimization for production

* Minify with cssnano
* Compress with Brotli.

With Tailwin CLI, minify CSS by adding the `--minify` flag:

```sh
npx tailwindcss -o build.css --minify
```

With PostCSS, add `cssnano` to the end of plugin list:

```js
module.exprts = {
    plugins: {
        tailswindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
}
```
