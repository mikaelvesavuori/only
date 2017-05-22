const gulp = require("gulp");

gulp.task("watch", ["build", "stylefmt", "stylelint", "webpack", "babel", "eslint", "complexity", "fileinclude", "browsersync"], function() { });
