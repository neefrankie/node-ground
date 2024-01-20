const path = require('path');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: {
    login: './src/login.ts',
    upload: './src/upload.ts',
  },
  devtool: prod ? 'source-map' : 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
