var gulp = require('gulp');
var path = require('path');
var spawn = require('child_process').spawn;
var frontendCompiler = require('./src/client/webpack.js');
var backendCompiler = require('./webpack.js');
var prc;
function startElectron() {
  prc = spawn('electron',[path.join(__dirname, 'dist','main.js')]);
  prc.stdout.setEncoding('utf8');
  prc.stdout.on('data', function (data) {
    var str = data.toString();
    console.log(str);
  });
  prc.on('close', (code, signal) => {
    console.log(signal);
    if(signal === 'SIGUSR2') {
      console.log('restarting electron ....');
      startElectron();
    }
  });
  return prc;
}
function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }
    if(done) {
      done();
    }
  }
}

gulp.task('frontend-build', function(done) {
  frontendCompiler.run(onBuild(done));
});

gulp.task('backend-build', function(done) {
  backendCompiler.run(onBuild(done));
});

gulp.task('backend-watch', function(done) {
  var firedDone = false;
  startElectron();
  backendCompiler.watch(100, function(err, stats) {
    if(!firedDone) {
      firedDone = true;
      done();
    }
    prc.kill('SIGUSR2');
    console.log('backend compiled');
  });
});

gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('watch', ['backend-watch']);

gulp.task('run', ['backend-watch'], function() {

});
