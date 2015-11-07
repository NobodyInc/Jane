//import webpack from 'webpack';
var webpack = require('webpack');

module.exports = {
  entry:[
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/app.js',
    ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  cssnext: {
    browsers: 'last 2 versions',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
