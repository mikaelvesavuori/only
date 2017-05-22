const config = require("../config.js");

const gulp = require("gulp");
const browsersync = require("browser-sync");

gulp.task("browsersync", ["sass"], function() {
	browsersync(config.browsersync);

	gulp.watch(config.browsersync.src + "sass/**/*.scss", ["sass", "stylelint"]);
	gulp.watch(config.browsersync.src + "css/**/*.css", browsersync.reload);
	gulp.watch("**/*.{html,php}", ["fileinclude", browsersync.reload]);
	gulp.watch("design/**/*.json", ["theo", "sass", "stylelint"]);
	gulp.watch(config.browsersync.src + "scripts/compiled/*.js", browsersync.reload);
	gulp.watch(config.browsersync.src + "scripts/js/**/*.js", ["babel", "eslint"], browsersync.reload);
	gulp.watch(config.browsersync.src + "scripts/jsx/**/*.{js,jsx}", ["webpack"], browsersync.reload);
});
