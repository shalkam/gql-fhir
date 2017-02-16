import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from '../data/common/acl/user/passport/index.js';
import schema from '../data/schema.js';
import config from '../../config.js';
import events from 'events';
import expressWebpack from './express-webpack.js';
import acl from 'acl';
const app = express();
const mongoStore = require('connect-mongo')(session);
class Loader extends events.EventEmitter {
  constructor() {
    super();
  }
  init() {
    const self = this;
    mongoose.connect(config.DB_URL + '/' + config.DB_NAME);
    mongoose.Promise = Promise;
    app.use(bodyParser.json());
    app.use(
      session({
        secret: 'keyboard cat',
        saveUninitialized: true,
        resave: true,
        store: new mongoStore({ mongooseConnection: mongoose.connection })
      })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    // persistent login sessions
    if (process.env.NODE_ENV !== 'DEV_SERVER') {
      expressWebpack(app);
    }
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
    mongoose.connection.on('connected', function(error) {
      if (error) throw error;
      const aclInstance = new acl(new acl.mongodbBackend(mongoose.connection.db, 'acl_'));
      app.use(
        '/' + config.GQL_URL_DIR,
        graphqlExpress((req, res) => {
          return { schema, context: { req, acl: aclInstance } };
        })
      );
      app.get('*', function(_, res) {
        res.sendFile(config.INDEX_FILE);
      });
      app.listen(config.APP_PORT, () => {
        self.emit('server.loaded');
        console.log(`server listening at port ${config.APP_PORT}`);
      });
    });
  }
}

export default new Loader();
