var config = require("../config.js");

var gulp   = require("gulp");
var eslint = require("gulp-eslint");

gulp.task("eslint", function() {
	return gulp.src(config.eslint.src)
		.pipe(eslint())
		.pipe(eslint.format())
		//.pipe(eslint.failAfterError());
});