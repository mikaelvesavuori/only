var config = require("../config.js").optimize.css;

var gulp = require("gulp");
var nano = require("gulp-cssnano");
var size = require("gulp-size");

gulp.task("optimize:css", function() {
	return gulp.src(config.src)
		.pipe(nano())
		.pipe(gulp.dest(config.dest))
		.pipe(size());
});