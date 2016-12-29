var util = require('util');
var events = require('events');
var MongoDB = require('./mongo.js');
var Server = require('../api/server/server.js');

function Loader() {
  events.EventEmitter.call(this);
}
Loader.prototype.init = function() {
  var self = this;
  MongoDB.init();
  MongoDB.on('loaded', function (msg) {
    self.emit('loaded.db');
    self.emit('loading.server');
    Server.init();
  });

  Server.on('started', function() {
    self.emit('loaded.server');
  })
};
util.inherits(Loader, events.EventEmitter);

module.exports = new Loader();
