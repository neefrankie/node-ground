const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/canvas.ts',
    upload: './src/upload.ts',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Canvas',
      inject: 'body',
      chunks: ['index'], // Add only index chunk
      hash: true, // Append compilation hash `?has=xxx`
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      title: 'Test',
      inject: 'body',
      template: "./src/assets/test.html"
    })
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
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
