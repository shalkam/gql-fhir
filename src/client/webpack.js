var webpack = require('webpack');
var path = require('path');
var DeepMerge = require('deep-merge');
var config = require('../../config.js');

var deepmerge = DeepMerge(function(target, source, key) {
  if (target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// generic
var defaultConfig = {};

if (process.env.NODE_ENV !== 'production') {
  //defaultConfig.devtool = '#eval-source-map';
  defaultConfig.devtool = 'source-map';
  // defaultConfig.debug = true;
}

function wpconfig(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

// frontend
var buildPath = path.join(__dirname, '../../dist/client/dist/');
var frontendConfig = wpconfig({
  entry: [ path.join(__dirname, 'index.js') ],
  output: {
    path: buildPath,
    publicPath: config.APP_URL + ':' + config.APP_PORT + '/' + config.PUBLIC_URL_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?minimize' },
      { test: /\.less$/, loader: 'style-loader!css-loader?minimize!less-loader' },
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(graphql|gql)$/, exclude: /node_modules/, loader: 'graphql-tag/loader' }
    ]
  }
});
if (process.env.NODE_ENV !== 'production') {
  frontendConfig.output.path = '/';
  frontendConfig.entry = [
    'webpack-hot-middleware/client?path=' +
      config.APP_URL +
      ':' +
      config.APP_PORT +
      '/__webpack_hmr&timeout=20000&reload=true',
    path.join(__dirname, '../src/client/index.js')
  ];
  frontendConfig.plugins = [ new webpack.HotModuleReplacementPlugin() ];
}
module.exports = webpack(frontendConfig);
