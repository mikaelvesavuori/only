var config = require("../config.js").optimize.scripts;

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var size = require("gulp-size");
var concat = require("gulp-concat");

gulp.task("optimize:scripts", function() {
	return gulp.src(config.src)
		.pipe(concat("main.min.js")) // NOTE: In the current setup you get double sets of minified files; once from index.html (useref) and once from optimize:scripts
		.pipe(uglify(config.options))
		.pipe(gulp.dest(config.dest))
		.pipe(size());
});