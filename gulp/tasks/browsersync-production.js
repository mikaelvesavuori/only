var config = require("../config.js").browsersync.production;

var gulp = require("gulp");
var browsersync = require("browser-sync");
var connect = require("gulp-connect-php");

gulp.task("browsersync:production", function() {
	connect.server({
		base: "dist",
		port: 9998
	});
	
	browsersync.init(config);
	
	gulp.watch("dist/*.html", browsersync.reload);
	gulp.watch("dist/*.php", browsersync.reload);
	gulp.watch("dist/scripts/**/*.js", browsersync.reload);
	gulp.watch("dist/css/**/*.css", browsersync.reload);
});