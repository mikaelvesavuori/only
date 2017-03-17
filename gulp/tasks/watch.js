const gulp = require("gulp");

gulp.task("watch", ["build", "stylefmt", "stylelint", "webpack", "babel", "eslint", "browsersync"], function() { });
