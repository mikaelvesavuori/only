const config = require("../config.js");

const gulp = require("gulp");
const complexity = require("gulp-complexity");

gulp.task("complexity", function() {
	return gulp.src(config.babel.dest)
		.pipe(complexity()); // breakOnErrors
});
