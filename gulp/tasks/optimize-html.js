var config = require("../config.js").optimize.html;

var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");

gulp.task("optimize:html", function() {
	return gulp.src(config.src)
		.pipe(htmlmin(config.options))
		.pipe(gulp.dest(config.dest));
});