var gulp   = require("gulp");
var eslint = require("gulp-eslint");

gulp.task("eslint", ["babel"], function() {
	return gulp.src("app/scripts/all/*.js") //app/scripts/**/*.js
		.pipe(eslint({
			"parser": "babel-eslint",
		
			parserOptions: {
				"ecmaFeatures": {
					"jsx": true,
					"modules": true
				}
			},
			"env": {
				"browser": true
			},
			"rules": {
				"quotes": [1, "double"],
				"semi": [1, "always"],
				"eqeqeq": 1,
				"curly": 1
				
				//"camelcase": 2
				//"brace-style": [2, "1tbs"],
				//"space-in-brackets": [2, "never"],
				//"space-infix-ops": 2,
			}
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});