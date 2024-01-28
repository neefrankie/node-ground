const prod = process.env.NODE_ENV === 'production';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: {
    main: './src/main.tsx',
    mui: './src/mui.tsx',
    state: './src/state.tsx',
  },
  devtool: prod ? 'source-map' : 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React TypeScript',
      chunks: ['main'],
      templateParameters: {
        useBootstrap: true,
      }
    }),
    new HtmlWebpackPlugin({
      title: 'MUI Demo',
      filename: 'mui.html',
      chunks: ['mui'],
      templateParameters: {
        useBootstrap: false,
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Managing State',
      filename: 'managing-state.html',
      chuks: ['state'],
      templateParameters: {
        useBootstrap: true,
      }
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
