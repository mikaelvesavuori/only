const config = require("../config.js");

const gulp = require("gulp");
const checkunusedcss = require("gulp-check-unused-css");

gulp.task("checkunusedcss", function() {
	return gulp.src(["app/css/*", "app/styleguide.html"])
		.pipe(checkunusedcss({
			//ignore: ["special-js-class", /^vendor-/ ]
		}));
});
