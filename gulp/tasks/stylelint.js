var config = require("../config.js");

var gulp = require("gulp");
var postcss = require("gulp-postcss");
var reporter = require("postcss-reporter");
var stylelint = require("stylelint");

gulp.task("stylelint", function() {
	return gulp.src(config.linting.src)
		.pipe(postcss([
		stylelint(config.linting.options.stylelint),
		reporter(config.linting.options.reporter)
	]));
});