const config = require("../config.js");

const gulp = require("gulp");
const mocha = require("gulp-mocha");

gulp.task("mocha", function() {
	return gulp.src("app/scripts/compiled/*{js}")
		.pipe(mocha(), { read: false });
});

gulp.task("mocha-ts", function() {
	return gulp.src("app/scripts/tests/*.test.ts")
		.pipe(mocha({ "compilers" : "ts:ts-node/register"}), { read: false });
});