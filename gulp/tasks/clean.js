const gulp = require("gulp");
const del = require("del");

gulp.task("clean:dist", function() {
	return del.sync("dist");
});