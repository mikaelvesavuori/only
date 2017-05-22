const gulp = require("gulp");
const cssNamespace = require("gulp-css-namespace");

gulp.task("css-namespace", function() {
	return gulp.src("src/*.css")
		.pipe(cssNamespace({selector:".namespace-"}))
		.pipe(gulp.dest("dist"));
});
