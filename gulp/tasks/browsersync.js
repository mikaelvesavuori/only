var config = require("../config.js").browsersync.development;

var gulp = require("gulp");
var browsersync = require("browser-sync");
var connect = require("gulp-connect-php");

gulp.task("browsersync", ["sass"], function() {
	connect.server({
		base: "app",
		port: 9999
	});
	
	browsersync(config);
	
	gulp.watch("app/sass/**/*.scss", ["sass", "stylelint"]);
	gulp.watch("app/*.html", browsersync.reload);
	gulp.watch("app/*.php", browsersync.reload);
	gulp.watch("app/scripts/**/*.{js,jsx}", ["eslint", browsersync.reload]);
	gulp.watch("app/css/**/*.css", browsersync.reload);
});