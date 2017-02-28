var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var nodemon = require('nodemon');
var spawn = require('child_process').spawn;
var fetchSchema = require('fetch-graphql-schema');
var frontendCompiler = require('./src/client/webpack.js');
var electronCompiler = require('./webpack.electron.js');
var serverCompiler = require('./webpack.server.js');
var config = require('./config.js');
var ElectronPrc;
var ServerPrc;
function watchElectron() {
  var paths = {
    darwin: 'dist/Electron.app/Contents/MacOS/Electron',
    freebsd: 'dist/electron',
    linux: 'dist/electron',
    win32: 'dist/electron.exe'
  };
  var electronPath = path.join(__dirname, 'node_modules', 'electron', paths[process.platform]);
  ElectronPrc = spawn(electronPath, [ path.join(__dirname, 'dist', 'main.js') ]);
  ElectronPrc.stdout.setEncoding('utf8');
  ElectronPrc.stdout.on('data', function(data) {
    var str = data.toString();
    console.log(str);
  });
  ElectronPrc.on('close', (code, signal) => {
    if (signal === 'SIGUSR2') {
      console.log('restarting electron ....');
      watchElectron();
    }
  });
}
function onBuild(done) {
  return function(err, stats) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(stats.toString());
    }
    if (done) {
      done();
    }
  };
}

gulp.task('frontend-build', function(done) {
  frontendCompiler.run(onBuild(done));
});

gulp.task('build-server', function(done) {
  serverCompiler.run(onBuild(done));
});

gulp.task('watch-electron', function(done) {
  var firedDone = false;
  watchElectron();
  electronCompiler.watch(1000, function(err, stats) {
    // if it's first time compiling
    if (!firedDone) {
      firedDone = true;
      done();
    } else {
      ElectronPrc.kill('SIGUSR2');
    }
    console.log('Electron compiled');
  });
});
gulp.task('dev-server', function(done) {
  var firedDone = false;
  serverCompiler.watch(100, function(err, stats) {
    // if it's first time compiling
    if (!firedDone) {
      firedDone = true;
      nodemon({
        execMap: { js: 'node' },
        script: path.join(__dirname, 'dist/server'),
        ignore: [ '*' ],
        watch: [ 'foo/' ],
        ext: 'noop'
      })
        .on('restart', function() {
          console.log('Patched!');
        })
        .on('quit', () => {
          process.exit();
        });
      done();
    }
    nodemon.restart();
  });
});
gulp.task('build-schema', [ 'dev-server' ], function getSchema() {
  fetchSchema(config.APP_URL + ':' + config.APP_PORT + '/' + config.GQL_URL_DIR, { readable: true })
    .then(function(schema) {
      fs.writeFile(path.join(__dirname, 'src/data/schema.graphql'), schema, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('Schema saved to: src/data/schema.graphql');
        console.log('Closing server');
        process.exit();
      });
    })
    .catch(err => {
      if (err.code === 'ECONNREFUSED') {
        console.log('Server not loaded, retrying in one second....');
        setTimeout(getSchema, 1000);
      }
    });
});
gulp.task('build', [ 'frontend-build', 'backend-build' ]);
gulp.task('run', [ 'watch-electron' ], function() {
});
