var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var DeepMerge = require('deep-merge');
var config = require('./config.js');

var deepmerge = DeepMerge(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// generic

var defaultConfig = {};

if(process.env.NODE_ENV !== 'production') {
  //defaultConfig.devtool = '#eval-source-map';
  defaultConfig.devtool = 'source-map';
  defaultConfig.debug = true;
}

function wpconfig(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

// backend

// var nodeModules = fs.readdirSync(path.join(__dirname, 'node_modules'))
// .filter(function(x) {
//   return ['.bin'].indexOf(x) === -1;
// });
let entry = (process.env.NODE_ENV !== 'production')? path.join(__dirname, 'src', 'main.dev.js') : path.join(__dirname, 'src', 'main.js');
nodeModules = ['express', 'webpack', 'mongoose'];
var backendConfig = wpconfig({
  entry: [
    entry
  ],
  target: 'electron',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [
    function(context, request, callback) {
      var pathStart = request.split('/')[0];
      if (nodeModules.indexOf(pathStart) >= 0 && request != 'webpack/hot/signal.js') {
        return callback(null, 'commonjs ' + request);
      };
      callback();
    }
  ],
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require(\'source-map-support\').install();',
    { raw: true, entryOnly: false })
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0'],
          'plugins': [
            ['transform-runtime', {
              'polyfill': true,
              'regenerator': true
            }]
          ]
        }
      },
      {
        test: /.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  }
});
module.exports = webpack(backendConfig);
