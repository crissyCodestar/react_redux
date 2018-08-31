const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: [
      'webpack-hot-middleware/client',
      './client/reduxstagram.js'
    ], output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
      },

  mode: 'development',

  module: {
      rules: [{
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }],
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true'
        }
      }
    ]
  },
  resolve: {
   extensions: [ '*', '.js', '.styl']
 },

   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoEmitOnErrorsPlugin()
   ],

   devtool: 'source-map',


};


// module.exports = {
//   devtool: 'source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     './client/reduxstagram'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   optimization: {
//    noEmitOnErrors: true
//  },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//
//   ],
//   module: {
//     loaders: [
//     // js
//     {
//       test: /\.js$/,
//       loaders: ['babel'],
//       include: path.join(__dirname, 'client')
//     },
//     // CSS
//     {
//       test: /\.styl$/,
//       include: path.join(__dirname, 'client'),
//       loader: 'style-loader!css-loader!stylus-loader'
//     }
//     ]
//   }
// };
