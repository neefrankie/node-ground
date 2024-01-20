const prod = process.env.NODE_ENV === 'production';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: {
    login: './src/login.tsx',
    canvas: './src/canvas.ts',
    upload: './src/upload.ts',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Login',
      template: './assets/index.html',
      inject: 'body',
      chunks: ['login'], // Add only index chunk
      hash: true, // Append compilation hash `?hash=xxx`
    }),
    new HtmlWebpackPlugin({
      title: 'Upload',
      filename: 'upload.html',
      template: './assets/index.html',
      inject: 'body',
      chunks: ['upload'], // Add only index chunk
      hash: true, // Append compilation hash `?hash=xxx`
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: "./assets/test.html",
      title: 'Test',
      inject: 'body',
      chunks: ['canvas']
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/', // Used within server to make sure files are served correctly.
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
