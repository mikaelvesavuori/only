const config = require("../config.js");

const gulp = require("gulp");
const psi = require("psi");
const site = config.psi.site;
const key = "";

gulp.task("psi:mobile", function () {
	return psi.output(site, {
		nokey: "true", // key: key
		strategy: "mobile",
		threshold: 80,
	}).then(function (data) {
		console.log("Speed score: " + data.ruleGroups.SPEED.score);
		console.log("Usability score: " + data.ruleGroups.USABILITY.score);
	});
});

gulp.task("psi:desktop", function () {
	return psi.output(site, {
		nokey: "true", // key: key
		strategy: "desktop",
		threshold: 80,
	}).then(function (data) {
		console.log("Speed score: " + data.ruleGroups.SPEED.score);
	});
});
