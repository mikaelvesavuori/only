const config = require("../config.js").htmlmin;

const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

gulp.task("htmlmin", function() {
	return gulp.src(config.src)
		.pipe(htmlmin(config.options))
		.pipe(gulp.dest(config.dest));
});
