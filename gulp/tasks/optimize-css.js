var config = require("../config.js").optimize.css;

var gulp = require("gulp");
var uncss = require("gulp-uncss");
var cleancss = require("gulp-clean-css");
var size = require("gulp-size");

gulp.task("optimize:css", function() {
	return gulp.src(config.src)
		.pipe(uncss({
			html: ["app/styleguide.html"] //"http://localhost:9999"
		}))
		.pipe(cleancss())
		.pipe(gulp.dest(config.dest))
		.pipe(size());
});