var config = require("../config.js").delete;

var gulp = require("gulp");
var del = require("del");

gulp.task("delete", function(callback) {
	del(config.src);
});