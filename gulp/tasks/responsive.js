/*
const config = require("../config.js");

const gulp = require("gulp");
const responsive = require("gulp-responsive");

gulp.task("responsive", function () {
	return gulp.src("src/*.{png,jpg}")
		.pipe(responsive({
			"background-*.jpg": {
			width: 700,
			quality: 50
		},
		"cover.png": {
			width: "50%",
			format: "jpeg", // convert
			rename: "cover.jpg"
		},
		// produce multiple images from one source
		"logo.png": [
			{
				width: 200
			},{
				width: 200 * 2,
				rename: "logo@2x.png"
			}
		]
		}))
		.pipe(gulp.dest("dist"));
});


var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('src/*.{jpg,png}')
	.pipe($.responsive({
	  'image.*': [{
		// image-small.jpg is 200 pixels wide
		width: 200,
		rename: {
		  suffix: '-small',
		  extname: '.jpg',
		},
	  }, {
		// image-small@2x.jpg is 400 pixels wide
		width: 200 * 2,
		rename: {
		  suffix: '-small@2x',
		  extname: '.jpg',
		},
	  }, {
		// image-large.jpg is 480 pixels wide
		width: 480,
		rename: {
		  suffix: '-large',
		  extname: '.jpg',
		},
	  }, {
		// image-large@2x.jpg is 960 pixels wide
		width: 480 * 2,
		rename: {
		  suffix: '-large@2x',
		  extname: '.jpg',
		},
	  }, {
		// image-extralarge.jpg is 1280 pixels wide
		width: 1280,
		rename: {
		  suffix: '-extralarge',
		  extname: '.jpg',
		},
	  }, {
		// image-extralarge@2x.jpg is 2560 pixels wide
		width: 1280 * 2,
		rename: {
		  suffix: '-extralarge@2x',
		  extname: '.jpg',
		},
	  }, {
		// image-small.webp is 200 pixels wide
		width: 200,
		rename: {
		  suffix: '-small',
		  extname: '.webp',
		},
	  }, {
		// image-small@2x.webp is 400 pixels wide
		width: 200 * 2,
		rename: {
		  suffix: '-small@2x',
		  extname: '.webp',
		},
	  }, {
		// image-large.webp is 480 pixels wide
		width: 480,
		rename: {
		  suffix: '-large',
		  extname: '.webp',
		},
	  }, {
		// image-large@2x.webp is 960 pixels wide
		width: 480 * 2,
		rename: {
		  suffix: '-large@2x',
		  extname: '.webp',
		},
	  }, {
		// image-extralarge.webp is 1280 pixels wide
		width: 1280,
		rename: {
		  suffix: '-extralarge',
		  extname: '.webp',
		},
	  }, {
		// image-extralarge@2x.webp is 2560 pixels wide
		width: 1280 * 2,
		rename: {
		  suffix: '-extralarge@2x',
		  extname: '.webp',
		},
	  }],
	}))
	.pipe(gulp.dest('dist'));
});
*/
