var webpack = require('webpack');
var path = require('path');
var DeepMerge = require('deep-merge');
var config = require('../../config.js');

var deepmerge = DeepMerge(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// generic

var defaultConfig = {
  // module: {
  //   loaders: [
  //     {test: /\.js$/, exclude: /node_modules/, loaders: ['monkey-hot', 'babel'] },
  //   ]
  // }
};

if(process.env.NODE_ENV !== 'production') {
  //defaultConfig.devtool = '#eval-source-map';
  defaultConfig.devtool = 'source-map';
  defaultConfig.debug = true;
}

function wpconfig(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

// frontend
var buildPath = path.join(__dirname, '../../dist/client/dist/');
var frontendConfig = wpconfig({
  entry: [
    path.join(__dirname, 'index.jsx')
  ],
  output: {
    path: buildPath,
    publicPath: config.APP_URL + ':' + config.APP_PORT + '/' + config.PUBLIC_URL_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  }
});
if(process.env.NODE_ENV !== 'production') {
  frontendConfig.output.path = '/';
  frontendConfig.entry = [
    'webpack-hot-middleware/client?path='+config.APP_URL + ':' + config.APP_PORT+'/__webpack_hmr&timeout=20000&reload=true',
    path.join(__dirname, '../src/client/index.jsx')
  ];
  frontendConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
  ];
}
module.exports = webpack(frontendConfig);
