var gulp = require("gulp");
var zip = require("gulp-zip");

gulp.task("zip", function() {
	var time = new Date();
	var year = time.getUTCFullYear();
	var month = time.getUTCMonth() + 1;
	var day = time.getUTCDate();
	var hour = time.getUTCHours() + 2; // +2 for GMT+1, adjust this if needed
	var minute = time.getUTCMinutes();
	
	if (month < 10) {
		month = "0"+month;
	}
	
	time = (year + "" + month + "" + day + "" + hour + "" + minute);
	
	return gulp.src("dist/**/*")
		.pipe(zip("archive_" + time + ".zip"))
		.pipe(gulp.dest("backup"));
});