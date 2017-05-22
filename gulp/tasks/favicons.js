const config = require("../config.js");

const gulp = require("gulp");
const favicons = require("gulp-favicons");

gulp.task("favicons", function () {
	gulp.src("./app/media/gfx/only.png").pipe(favicons({
		appName: "My App",
		appDescription: "This is my application",
		developerName: "Your Name",
		developerURL: "https://yoursitename.com/",
		background: "#000",
		path: "media/icons/",
		url: "https://yoursitename.com/",
		display: "standalone",
		orientation: "portrait",
		version: 1.0,
		logging: false,
		online: false,
		html: "index.html",
		pipeHTML: true,
		replace: true
	}))
	.pipe(gulp.dest("./app/media/icons/"));
});
