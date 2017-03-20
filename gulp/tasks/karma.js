var gulp = require('gulp');
var Server = require('karma').Server;
var path = require('path');

gulp.task('karma-ts', function (done) {
  new Server({
    configFile: path.join(__dirname, '../../', 'karma.conf.js'),
    singleRun: false
  }, done).start();
});