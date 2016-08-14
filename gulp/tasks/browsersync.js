var config = require("../config.js").browsersync.development;

var gulp = require("gulp");
var browsersync = require("browser-sync");

gulp.task("browsersync", ["sass"], function() {
	browsersync(config);
	
	gulp.watch("app/sass/**/*.scss", ["sass"]);
	gulp.watch("app/*.html", browsersync.reload);
	gulp.watch("app/scripts/**/*.js", browsersync.reload);
	gulp.watch("app/css/**/*.css", browsersync.reload);
});