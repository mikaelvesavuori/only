var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("build", function(cb) {
	runSequence(
		"sass",
		[
			"parker"
		],
		cb)
});

// NOTE: In the current setup you get double sets of minified files; once from index.html (useref) and once from optimize:scripts

gulp.task("build:production", function(callback) {
	runSequence(
		//"delete", // this will break the loop — FIX
		"styles",
		[
			"optimize"
		],
		[
			"postprocess"
		],
		"copyfiles")
});

gulp.task("styles", function(cb) {
	runSequence(
		"sass",
		[
			"critical"
		],
		cb)
});

gulp.task("optimize", function(cb) {
	runSequence(
		[
			"optimize:css",
			"optimize:scripts",
			"optimize:images",
			"optimize:html"
		],
		cb)
});

gulp.task("postprocess", function(cb) {
	runSequence(
		[
			"useref"
		],
		[
			"babel-postprocess"
		],
		[
			"parker"
		],
		cb)
});