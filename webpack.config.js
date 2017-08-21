var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
      //{ test: /\.css$/, loader: "style-loader!css-loader" },
      //{ test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      {
          test: /\.(css|less)$/ ,
          loader: ExtractTextPlugin.extract({
            use: ['css-loader', 'less-loader'],
                       fallback: 'style-loader',
          })

      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix:true
        }
      }
    ]

  },
  plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = config;
