const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // Alternatively, if you are using babel-loader, you can use `@babel/preset-typescript`
        // and let babel to handle both js and ts.
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Canvas',
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: './src/assets/test.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleaning up the /dist folder
  },
  devtool: 'inline-source-map',
  // The webpack-dev-server provides you with a rudimentary web server and the ability to use live reloading.
  // webpack-dev-server serves bundled files from the directory defined in output.path.
  // files will be available under http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename].
  // webpack-dev-server doesn't write any output files after compiling. 
  // Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path. 
  devServer: {
    static: './dist',
    hot: true, // Enable hot module replacement. Enabled by default.
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
