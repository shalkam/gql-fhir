const path = require('path');

const config = {
  // Local dir config
  PUBLIC_DIR: path.join(__dirname, 'dist/client/public/dist/'),
  PUBLIC_URL_DIR: 'dist',
  INDEX_FILE: path.join(__dirname, 'client','index.html'),
  SRC_DIR: path.join(__dirname, 'client', 'src'),
  // App server config
  APP_PORT: 3000,
  APP_URL: 'http://localhost',
  GQL_URL_DIR: 'graphql',
  // Database config
  DB_URL: 'mongodb://localhost:27017',
  DB_NAME: 'graphql'
}

module.exports = config;
