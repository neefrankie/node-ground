# PostCSS

## Setup

1. Find and add PostCSS extensions for your build tool.
2. Select plugins and add them to your PostCSS process.

## CLI

```sh
pnpm add postcss postcss-cli postcss-loade-config
postcss --use autoprefixer -o main.css css/*.css
```

## Webpack

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    }
                    {
                        loader: 'postcss-loader',
                    }
                ],
            },
        ]
    }
}
```

Create `postcss.config.js`:

```js
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        require('auto-prefixer'),
        require('postcss-nested')
    ]
}

module.exports = config
```
