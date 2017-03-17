const config = require("../config.js");

const gulp = require("gulp");
const webpackConfig = require("../../webpack.config.js");
const webpackStream = require("webpack-stream");
const webpack2 = require("webpack");

gulp.task("webpack", function() {
	return gulp.src(config.webpack.src)
		.pipe(webpackStream(webpackConfig, webpack2))
		.pipe(gulp.dest(config.webpack.dest));
});
