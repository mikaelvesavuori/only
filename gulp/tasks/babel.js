var config = require("../config.js");

var gulp = require("gulp");
//var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("babel", function() {
	return gulp.src(config.babel.src)
		//.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(concat("main.js"))
		//.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(config.babel.dest))
});

// Used in the end of the "build:production" task to Babelify and uglify the files created by useref
gulp.task("babel-postprocess", function() {
	return gulp.src("dist/scripts/useref/*.js")
		//.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		//.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist/scripts/"))
});