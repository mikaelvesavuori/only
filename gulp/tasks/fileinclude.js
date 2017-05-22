const gulp = require("gulp");
const fileinclude = require("gulp-file-include");

gulp.task("fileinclude", function() {
	return gulp.src(["src/index.html"])
		.pipe(fileinclude({
			//prefix: "@@",
			//basepath: "@file"
	}))
	.pipe(gulp.dest("./"));
});
