var path = require('path')
var webpack = require('webpack')
var OfflinePlugin = require('offline-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry:['webpack/hot/only-dev-server/',
          'webpack-dev-server/client?http://localhost:8080/',
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
  resolve: {
    extensions:['.js','.jsx']
  },
  devServer :{
    hot :true,
    contentBase:__dirname,
    port:8080
  }
}

//https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96

//https://medium.com/@justinjung04/react-server-side-rendering-and-hot-reloading-ffb87ca81a89

