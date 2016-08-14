var config = require("../config.js");

var gulp = require("gulp");
var browsersync = require("browser-sync");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var scss = require("postcss-scss");
var precss = require("precss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var nano = require("gulp-cssnano");
var gulpFilter = require("gulp-filter");
var rename = require("gulp-rename");

gulp.task("sass", ["stylelint"], function () {
	var processors = [
		precss(config.precss.options),
		autoprefixer(config.autoprefixer.options),
		mqpacker(config.mqpacker.options)
	];
	
	var filter = gulpFilter(["*.css", "!*.map"], { restore: true });
	browsersync.notify("Compiling Sass");
	
	return gulp.src(config.sass.src)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(postcss(processors, {syntax: scss}))
		.pipe(filter)
		.pipe(sourcemaps.write("./maps", {includeContent: false, sourceRoot: "app/sass"}))
		.pipe(filter.restore)
		.pipe(rename({dirname: "", suffix: ".min"}))
		.pipe(nano())
		.pipe(gulp.dest(config.sass.dest))
		.pipe(browsersync.stream());
});