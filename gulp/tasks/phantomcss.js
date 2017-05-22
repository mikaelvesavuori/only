const config = require("../config.js");

const gulp = require("gulp");
const phantomcss = require("gulp-phantomcss");

gulp.task("phantomcss:desktop", function() {
	gulp.src("./casper.js")
		.pipe(phantomcss({
			screenshots: config.phantomcss.srcScreensDesktop,
			results: config.phantomcss.srcResultsDesktop,
			viewportSize: [1180, 768]
	}));
});

gulp.task("phantomcss:mobile", function() {
	gulp.src("./casper.js")
		.pipe(phantomcss({
			screenshots: config.phantomcss.srcScreensMobile,
			results: config.phantomcss.srcResultsMobile,
			viewportSize: [320, 568]
	}));
});

gulp.task("phantomcss", function() {
	gulp.start("phantomcss:desktop", "phantomcss:mobile");
});

/*
Size chart:

$size-wide:					1180 x 800
$size-desktop:				1024 x 768
$viewport-tablet:			768 x 1024
$viewport-mobile-mid:		568 (mobile landscape)
$viewport-mobile:			480 (older, smaller mobile landscape)
$viewport-mobile-xl:		736 x 414
$viewport-mobile-portrait:	320 x 568
*/
