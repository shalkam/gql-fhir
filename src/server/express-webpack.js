const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const frontendCompiler = require('../client/webpack.js');

export default (app) => {
  app.use(webpackDevMiddleware(frontendCompiler, {
    hot: true,
    publicPath: frontendCompiler.options.output.publicPath,
    stats: {
      colors: true,
      chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
      'errors-only': true
    },
    watchOptions: {
      poll: true
    }
  }));
  app.use(webpackHotMiddleware(frontendCompiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}
