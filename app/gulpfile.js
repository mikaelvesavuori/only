var gulp = require("gulp");
var critical = require("critical");
var cleanCSS = require("gulp-clean-css");
//var rename = require("gulp-rename");

gulp.task("watch", function() {
	gulp.watch("css/*.css", ["minify-css"]);
});

//gulp.task("critical", ["build"], function (cb) {
gulp.task("critical", function (cb) {
	critical.generate({
		//inline: true,
		src: "styleguide.html",
		dest: "css/dist/critical.min.css",
		//dest: "styleguide-critical.html",
		minify: true,
		width: 1300,
		height: 900
	});
});

gulp.task("minify-css", function() {
	return gulp.src("css/*.css")
	.pipe(cleanCSS({debug: true}, function(details) {
		console.log(details.name + ": " + details.stats.originalSize);
		console.log(details.name + ": " + details.stats.minifiedSize);
	}))
	.pipe(gulp.dest("css/dist/"));
});


// http://stackoverflow.com/questions/34025398/how-do-i-use-gulp-to-minify-and-autoprefix-css-files-from-sass-scss
//var gulp = require("gulp");
//var sass = require("gulp-sass");
//var autoprefixer = require("gulp-autoprefixer");
//var minCss = require("gulp-minify-css");
//var rename = require("gulp-rename");
//
//var config = {
//   srcCss : "src/scss/**/*.scss";
//   buildCss: "build/css";
//}
//
//gulp.task("build-css", function(cb) {
//   gulp.src(config.srcCss);
//
//      // output non-minified CSS file
//      .pipe(sass({
//         outputStyle : "expanded";
//      }).on("error", sass.logError));
//      .pipe(autoprefixer());
//      .pipe(gulp.dest(config.buildCss));
//
//      // output the minified version
//      .pipe(minCss());
//      .pipe(rename({ extname: ".min.css" }));
//      .pipe(gulp.dest(config.buildCss));
//
//   cb();
//})
//
//gulp.task("watch", function(cb) {
//   gulp.watch(config.srcCss, ["build-css"]);
//})
//
//gulp.task("default", ["build-css", "watch"]);