const config = require("../config.js");

const gulp = require("gulp");
const svgsprite = require("gulp-svg-sprite");

const svgConfig = {
	svg: {
		namespaceClassnames: false
	},
	mode: {
		symbol: {
			dest: '.',
			sprite: 'sprite.svg'
		}
	}
};

gulp.task("svgsprite", function() {
	return gulp.src("app/media/gfx/**/*.svg") //{cwd: config.source + '/svg-sprite'}
		.pipe(svgSprite(svgConfig))
		.pipe(gulp.dest("app/media/gfx-final/"));
});
