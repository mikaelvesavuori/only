var config = require("../config.js").rsync;

var gulp = require("gulp");
var rsync = require("gulp-rsync");

gulp.task("rsync", function() {
	return gulp.src(config.src)
		.pipe(rsync(config.options));
});