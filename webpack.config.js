var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '');
var APP_DIR = path.resolve(__dirname, '');

//configuration for webpack server and deployment
var config = {
  entry: APP_DIR + '/js/main.js',
  output: {
    path: path.resolve(__dirname, "js"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  /*devServer: {
      inline: true,
      port: 8080,
      hot: true

   },*/
	module : {
    loaders : [
      {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader',
		      query: {
               presets: ['es2015', 'react']
            }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
  }
};

module.exports = config;
