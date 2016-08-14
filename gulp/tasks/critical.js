var gulp = require("gulp");

var critical = require("critical");

gulp.task("critical", function (cb) {
	return critical.generate({
		inline: true,
    	base: "app/",
		src: "index.html",
		dest: "app/index-critical.html",
		//dest: "app/css/critical.min.css",
		minify: true,
		extract: true,
		minify: true,
		width: 1300,
		height: 900
	});
});