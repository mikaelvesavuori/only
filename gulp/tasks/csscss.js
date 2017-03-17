const config = require("../config.js");

const gulp = require("gulp");
const csscss = require("gulp-csscss");

gulp.task("csscss", function() {
	return gulp.src("app/css/*")
		.pipe(csscss());
});
