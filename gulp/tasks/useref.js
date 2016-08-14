var gulp = require("gulp");
var useref = require("gulp-useref");
var gulpIf = require("gulp-if");
var uglify = require("gulp-uglify");
var nano = require("gulp-cssnano");

gulp.task("useref", function() {
	return gulp.src("app/*.html")
		.pipe(useref())
		.pipe(gulpIf(".js", uglify()))
		.pipe(gulpIf(".css", nano()))
		.pipe(gulp.dest("dist"))
});