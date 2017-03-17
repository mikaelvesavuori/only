const config = require("../config.js");

const gulp = require("gulp");
const mocha = require("gulp-mocha");

gulp.task("mocha", function() {
	return gulp.src("app/scripts/compiled/*{js}")
		.pipe(mocha(), { read: false });
});
