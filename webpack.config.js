const path = require('path');

module.exports = {
  entry: {
  	app:'./src/index.js'
  },
  devServer: {
  	contentBase: './dist',
  	port: 3000
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules:[
  		{ 
  			test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
	            loader: 'babel-loader',
	            options: {
	                presets: ['es2015', 'react']
	            }
	        }]        
        },        
  		{
  			test: /\.scss$/,
  			use: ['style-loader','css-loader','sass-loader']
  		}
  	]
  }
}