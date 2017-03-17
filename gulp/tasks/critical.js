const gulp = require("gulp");
const critical = require("critical").stream;

gulp.task("critical", function () {
	return gulp.src("_mockups/critical.html")
		.pipe(critical({
			base: "dist/",
			css: [
				"Static/css/main.css"
			],
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
			minify: true,
			ignore: ["font-face"]
		}))
		.pipe(gulp.dest("Static/css/"));
});
