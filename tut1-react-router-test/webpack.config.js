var webpack = require('webpack');

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'inline-source-map',
  entry: [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
            // presets: ['es2015', 'stage-1', 'react'],
            presets: ['react',  ["es2015", {"modules": false}], 'stage-1'],
            plugins:["transform-runtime", "transform-decorators-legacy", "transform-object-rest-spread", 
            "transform-class-properties",
            "react-hot-loader/babel","transform-es2015-destructuring", 
            ]
            // plugins : ['transform-runtime', "transform-decorators-legacy","transform-decorators"]
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};

module.exports = config;


// let config= {
//     entry: "./src/test.js",
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: "bundle.js"
//     },
//     devServer: {
//       contentBase: path.resolve(__dirname, 'dist'),
//       publicPath: '/'
//     },
//     module: {
//         loaders: [
//              {
//               test: /\.css$/,
//               use: [
//                 { loader: 'style-loader' },
//                 { loader: 'css-loader' }
//               ],
//             },
//             {
//                 test: /\.(js|jsx)$/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/,
//                 query: {
//                     presets: ['es2015', 'stage-1', 'react'],
//                     plugins : ['transform-runtime', "transform-decorators-legacy","transform-decorators"]
//                 }
//             }

//         ]
//     }
// };

// module.exports = config;
