const config = require("../config.js");

const gulp = require("gulp");

const files = [
	"app/.htaccess",
	"app/browserconfig.xml",
	"app/crossdomain.xml",
	"app/robots.txt",
	//"app/components",
	"app/fonts",
	"app/regions"
];

gulp.task("copyfiles", function() {
	gulp.src(files)
	.pipe(gulp.dest("dist/"));
});
