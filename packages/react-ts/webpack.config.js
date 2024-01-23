const prod = process.env.NODE_ENV === 'production';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: {
    main: './src/main.tsx',
    mui: './src/mui.tsx',
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
      title: 'React TypeScript',
      // template: './html/index.html',
      inject: 'body',
      chunks: ['main'],
      hash: true, // Append compilation hash `?hash=xxx`
      scriptLoading: 'module',
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
    }),
    new HtmlWebpackPlugin({
      title: 'MUI Demo',
      filename: 'mui.html',
      chunks: ['mui'],
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
