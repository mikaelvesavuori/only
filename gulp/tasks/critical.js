var gulp = require("gulp");

var critical = require("critical");

gulp.task("critical", function (cb) {
	return critical.generate({
		inline: true,
    	base: "app/",
		src: "index.html",
		css: ["app/css/main.css"],
		dimensions: [{
			width: 320,
			height: 480
		},{
			width: 768,
			height: 1024
		},{
			width: 1280,
			height: 960
		}],
		dest: "app/index-critical.html",
		minify: true,
		extract: false,
		ignore: ["font-face"]
	});
});