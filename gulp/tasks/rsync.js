const config = require("../config.js").rsync;

const gulp = require("gulp");
const rsync = require("gulp-rsync");

gulp.task("rsync", function() {
	return gulp.src(config.src)
		.pipe(rsync(config.options));
});
