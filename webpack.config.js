var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {

entry: APP_DIR + '/main.js',
output: {
  path: BUILD_DIR,
  filename: 'bundle.js'
},
 devtool: "source-map",
 node: {
  console: true,
  fs: 'empty',
  net: 'empty',
  tls: 'empty',
  path: 'empty'   
 },
devServer: {
  inline:false,
  port: process.env.PORT || 9000,
  host: process.env.HOST || 'localhost'
},
module : {
  loaders : [
    {
      test : /\.js?/,
      include : [
            APP_DIR
       ],
      loaders: ['babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-decorators-legacy,plugins[]=transform-class-properties,plugins[]=transform-export-extensions'],
    },

    { test: /\.json$/, loader: "json-loader" }
  ]
}
}

module.exports = config;