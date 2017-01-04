import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import mongoose from 'mongoose';
import gql from 'graphql-tag';
import http from 'http';
import schema from '../data/schema.js'
import config from '../../config.js';
import events from 'events';
import bluebird from 'bluebird';

const app = express();
const frontendCompiler = require('../client/webpack.js');

class Loader extends events.EventEmitter {
  constructor() {
    super();
  }
  init() {
    const self = this;
    mongoose.connect(config.DB_URL + '/' + config.DB_NAME);
    mongoose.Promise = bluebird;
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
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
    app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
    app.use('/'+ config.GQL_URL_DIR, bodyParser.json(), graphqlExpress({schema}));
    app.get('*', function (_, res) { res.sendFile(config.INDEX_FILE) });
    app.listen(config.APP_PORT, () => {
      self.emit('server.loaded');
    });
  }
}

export default new Loader();
