const config = require("../config.js");

const gulp = require("gulp");
const postcss = require("gulp-postcss");
const stylefmt = require("gulp-stylefmt");

gulp.task("stylefmt", function () {
	return gulp.src(config.stylefmt.src)
		.pipe(stylefmt(config.linting.stylelint))
		.pipe(gulp.dest(config.stylefmt.dest));
});
