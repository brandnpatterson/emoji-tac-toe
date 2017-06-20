var path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    open: true,
    port: 8888,
    stats: 'errors only'
  },
  context: path.join(__dirname, './src'),
  entry: [
    './js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};
