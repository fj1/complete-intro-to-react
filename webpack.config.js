const path = require('path')

module.exports = {
   context: __dirname,
   entry: './js/ClientApp.js',
   devtool: 'eval',
   output: {
     path: path.join(__dirname, '/public'),
     filename: 'bundle.js'
   },
   devServer: {
     publicPath: '/public/',
     historyApiFallback: true
   },
   resolve: {
     extensions: ['.js', '.json']
   },
   stats: {
     colors: true,
     reasons: true,
     chunks: true
   },
   module: {
     rules: [
       {
         enforce: 'pre',
         test: /\.js$/,
         loader: 'eslint-loader',
         exclude: /node_modules/
       },
       {
         // new loader to let us import json files
         test: /\.json$/,
         loader: 'json-loader'
       },
       {
         include: path.resolve(__dirname, 'js'),
         test: /\.js$/,
         loader: 'babel-loader'
       },
       {
         // if you see a .css extension, then use style-loader
         test: /\.css$/,
         // 'use' says, if it passes the 'test', then do these step(s)
         // ie can include sass or less here
         use: [
           'style-loader',
           // this next loader has configs, so it is its own obj
           {
             loader: 'css-loader',
             options: {
               url: false
             }
           }
         ]
       }
     ]
   }
}
