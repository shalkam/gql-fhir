import {
  app,
  BrowserWindow,
  Menu,
  shell,
  ipcMain,
  dialog
} from 'electron';
// var Loader = require('./loaders/index.js');
// var MongoDB = require('./loaders/mongo.js');
import Server from './server/server.dev.js';
import path from 'path';

// dialog.showErrorBox = function(title, content) {
//     console.log(`${title}\n${content}`);
// };
let menu;
let template;
let mainWindow = null;

app.on('window-all-closed', () => {
  // MongoDB.kill();
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
  Server.init();
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    // webPreferences: {
    //   // Load `electron-notification-shim` in rendering view.
    //   preload: path.join(__dirname, 'notify.js')
    // }
  });
  mainWindow.loadURL(`file://${__dirname}/client/index.html`);
  Server.on('server.loaded', () => {
    console.log('Server has started');
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
  // Listen for notification events.
    ipcMain.on('notification-shim', (e, msg) => {
        console.log(`Title: ${msg.title}, Body: ${msg.options.body}`);
    });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  // mainWindow.openDevTools();
  mainWindow.webContents.on('context-menu', (e, props) => {
    const { x, y } = props;

    Menu.buildFromTemplate([{
      label: 'Inspect element',
      click() {
        mainWindow.inspectElement(x, y);
      }
    }]).popup(mainWindow);
  });
});
