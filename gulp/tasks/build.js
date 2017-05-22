const gulp = require("gulp");
const runSequence = require("run-sequence");

gulp.task("build", function(cb) {
	runSequence(
		"theo",
		[
			"sass"
		],
		[
			"critical",
			"parker"
		],
		[
			"swprecache"
		],
		cb)
});

gulp.task("build:production", function(cb) {
	runSequence(
		//"delete", // this will break the loop — FIX
		"styles",
		[
			"optimize"
		],
		[
			"postprocess"
		],
		[
			"swprecache"
		],
		"copyfiles")
});
