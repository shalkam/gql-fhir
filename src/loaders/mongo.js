var events = require('events');
var util = require('util');
var path = require('path');
var spawn = require('child_process').spawn;
var dbpath = path.resolve(__dirname, '..', '..', 'db');
var prc = null;

function MongoLoader() {
  events.EventEmitter.call(this);
}
MongoLoader.prototype.init = function () {
  var self = this;
    //, '--storageEngine', 'mmapv1' ---if we want to change the storageEngine
    prc = spawn(path.resolve( __dirname, '..', '..', 'bin', 'mongod'),  ['--dbpath', dbpath]);
    prc.stdout.setEncoding('utf8');
    prc.stdout.on('data', function (data) {
      var str = data.toString();
      if(str.indexOf('[initandlisten] waiting for connections on port') !== -1){
        self.emit('loaded', 'database loaded');
      }
    });
};
MongoLoader.prototype.kill = function () {
  prc.kill();
}
util.inherits(MongoLoader, events.EventEmitter);

module.exports = new MongoLoader();
