const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('./'),
    filename: 'index_bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }, 
  plugins: [HtmlWebpackPluginConfig]
}