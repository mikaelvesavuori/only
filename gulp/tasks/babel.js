var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("babel", function() {
	return gulp.src("app/scripts/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(concat("all.js"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("app/scripts/all/"))
});