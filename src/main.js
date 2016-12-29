import { app, BrowserWindow, Menu, shell } from 'electron';
// var Loader = require('./loaders/index.js');
// var MongoDB = require('./loaders/mongo.js');
import Server from './server/server.js';
Server.init();

let menu;
let template;
let mainWindow = null;

app.on('window-all-closed', () => {
  // MongoDB.kill();
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });
  mainWindow.loadURL(`file://${__dirname}/client/index.html`);
  Server.on('server.loaded', () => {
     console.log('EventEmitter is working');
     mainWindow.webContents.send('loaded.server');
   })
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
    mainWindow.webContents.send('app.started')
    // Loader.init();
    // Loader.on('loaded.db', () => {
    //   mainWindow.webContents.send('loaded.db');
    // })
    // Loader.on('loading.server', () => {
    //   mainWindow.webContents.send('loading.server');
    // })
    // Loader.on('loaded.server', () => {
    //   mainWindow.webContents.send('loaded.server');
    // })
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
