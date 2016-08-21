var config = require("../config.js");

var gulp = require("gulp");
var postcss = require("gulp-postcss");
var reporter = require("postcss-reporter");
var postcss = require("gulp-postcss");
var scss = require("postcss-scss");
var stylelint = require("stylelint");

var processors = [
	stylelint(config.linting.options.stylelint),
	reporter(config.linting.options.reporter)
];

gulp.task("stylelint", function() {
	return gulp.src(config.linting.src)
		.pipe(postcss(processors, {syntax: scss}));
});