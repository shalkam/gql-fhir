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

class Loader extends events.EventEmitter {
  constructor() {
    super();
  }
  init() {
    const self = this;
    const app = express();
    mongoose.connect(config.DB_URL + '/' + config.DB_NAME);
    app.use('/dist', express.static(config.PUBLIC_DIR));
    app.use('/'+ config.GQL_URL_DIR, bodyParser.json(), graphqlExpress({schema}));
    app.get('*', function (_, res) { res.sendFile(config.INDEX_FILE) });
    app.listen(config.APP_PORT, () => {
      self.emit('server.loaded');
      console.log('Now browse to ' + config.APP_URL + ':' + config.APP_PORT)
    });
  }
}

export default new Loader();
