var config = require("../config.js");

var gulp = require("gulp");

var files = [
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