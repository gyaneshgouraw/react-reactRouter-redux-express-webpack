var fs = require('fs')
var path = require('path')

module.exports = {

  entry: path.resolve(__dirname, 'server/index.js'),

  output: {
    filename: 'dist/server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: false,
    __dirname: false
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel' ,
        query: {
          presets: [ 'es2015','react','stage-0','env' ]
        }
      }
    ]
  }

}
