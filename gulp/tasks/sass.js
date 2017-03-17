const config = require("../config.js");

const gulp = require("gulp");
const browsersync = require("browser-sync");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const scss = require("postcss-scss");
const precss = require("precss");
const cssnext = require("postcss-cssnext");
const colorguard = require("colorguard");
//const gulpFilter = require("gulp-filter");
const rename = require("gulp-rename");
const cleancss = require("gulp-clean-css");

gulp.task("sass", function () {
	const processors = [
		precss(config.precss.options),
		cssnext(config.cssnext.browsers),
		colorguard()
	];

	//const filter = gulpFilter(["*.css", "!*.map"], { restore: true });
	browsersync.notify("Compiling Sass");

	return gulp.src(config.sass.src)
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(postcss(processors, {syntax: scss}))
		.pipe(cleancss())
		//.pipe(filter)
		.pipe(sourcemaps.write("maps"))
		.pipe(gulp.dest(config.sass.dest))
		//.pipe(filter.restore)
		.pipe(browsersync.stream());
});
