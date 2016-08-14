var config = require("../config.js").browsersync.production;

var gulp = require("gulp");
var browsersync = require("browser-sync").create();

gulp.task("browsersync:production", function() {
	browsersync.init(config);
	
	gulp.watch("dist/*.html", browsersync.reload);
	gulp.watch("dist/scripts/**/*.js", browsersync.reload);
	gulp.watch("dist/css/**/*.css", browsersync.reload);
});