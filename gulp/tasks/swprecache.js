const gulp = require("gulp");
const path = require("path");
const swPrecache = require("sw-precache");

gulp.task("swprecache", function(callback) {
	const rootDir = "app";

	swPrecache.write(path.join(rootDir, "sw.js"), {
		staticFileGlobs: [rootDir + "/**/*.{js,html,css,png,jpg,svg}"],
		stripPrefix: rootDir
	}, callback);
});
