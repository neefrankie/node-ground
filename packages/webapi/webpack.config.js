const prod = process.env.NODE_ENV === 'production';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: {
    canvas: './src/client/canvas.ts',
    cssbox: './src/client/cssbox.ts',
  },
  devtool: prod ? 'source-map' : 'inline-source-map',
  devServer: {
    static: './dist',
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    
    new HtmlWebpackPlugin({
      template: './assets/html/index.html',
      chunks: ['canvas'],
      hash: true, // Append compilation hash `?hash=xxx`
    }),
    new HtmlWebpackPlugin({
      filename: 'cssbox.html', // This is the url to open in browser
      template: './assets/html/flexbox.html',
      chunks: ['cssbox'],
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
        // css-loader handles import in js file.
        // style-loader inject css into html. It cannot be used together with MinCssExtactPlugin.loader.
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
