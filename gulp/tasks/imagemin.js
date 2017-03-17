const config = require("../config.js");

const gulp = require("gulp");
const changed = require("gulp-changed");
const imagemin = require("gulp-imagemin");

gulp.task("imagemin", function() {
	gulp.src(config.imagemin.src)
		.pipe(changed(config.imagemin.dest))
		.pipe(imagemin())
		.pipe(gulp.dest(config.imagemin.dest))
});
