var path = require('path')
var webpack = require('webpack')
var OfflinePlugin = require('offline-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry:['webpack/hot/dev-server/',
          'webpack-dev-server/client?http://localhost:8081/',
          './client/index.js'
        ],
  // entry: [
  //   'webpack-hot-middleware/client',
  //   './client/index.js'
  // ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new OfflinePlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: [ 'react-hmre' ]
        }
      }
    ]
  },
  devServer :{
    hot :true,
    contentBase:'/'
  }
}

//https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96
