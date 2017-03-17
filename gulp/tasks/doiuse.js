const config = require("../config.js");

const gulp = require("gulp")
const postcss = require("gulp-postcss")
const doiuse = require("doiuse")

gulp.task("doiuse", function() {
	return gulp.src(config.doiuse.src)
		.pipe(postcss([
			doiuse(config.doiuse)
	]))
});
