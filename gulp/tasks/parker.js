var gulp = require("gulp");

var parker = require("gulp-parker");

gulp.task("parker", function() {
	return gulp.src("app/css/*.css")
		.pipe(parker({
			file: "Parker_Report.md",
			title: "Parker Report via Gulp",
			metrics: [
				"TotalStylesheets",
				"TotalStylesheetSize",
				"TotalRules",
				"TotalSelectors",
				"TotalIdentifiers",
				"TotalDeclarations",
				"SelectorsPerRule",
				"IdentifiersPerSelector",
				"SpecificityPerSelector",
				"TopSelectorSpecificity",
				"TopSelectorSpecificitySelector",
				"TotalIdSelectors",
				"TotalUniqueColours",
				"UniqueColours",
				"TotalImportantKeywords",
				"TotalMediaQueries",
				"MediaQueries"
			]
		})
	);
});