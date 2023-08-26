const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  console.log('Goal: ', env.goal);
  console.log('Production: ', env.production);

  return {
    mode: 'development',
    entry: {
      index: './src/index.js',
      print: './src/print.js',
      // another: './src/another-module.js'
      // index: {
      //   import: './src/index.js',
      //   dependOn: 'shared',
      // },
      // another: {
      //   import: './src/another-module.js',
      //   dependOn: 'shared',
      // },
      // shared: 'lodash',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Caching',
      })
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    optimization: {
      moduleIds: 'deterministic',
      usedExports: true,
      runtimeChunk: 'single', // Use multiple entry points on a single HTML page.
      splitChunks: {
        // chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/i,
    //       use: ['style-loader', 'css-loader']
    //     },
    //     {
    //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //       type: 'asset/resource',
    //     },
    //     {
    //       test: /\.(csv|tsv)$/i,
    //       use: ['csv-loader'],
    //     },
    //     {
    //       test: /\.xml$/i,
    //       use: ['xml-loader'],
    //     },
    //     {
    //       test: /\.toml$/i,
    //       type: 'json',
    //       parser: {
    //         parse: toml.parse,
    //       },
    //     },
    //     {
    //       test: /\.yaml$/i,
    //       type: 'json',
    //       parser: {
    //         parse: yaml.parse
    //       }
    //     },
    //     {
    //       test: /\.json5$/i,
    //       type: 'json',
    //       parser: {
    //         parse: json5.parse,
    //       }
    //     }
    //   ],
    // },
  };
};
