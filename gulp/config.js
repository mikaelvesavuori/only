var dev = "app/";
var dist = "dist/";

module.exports = {
	browsersync: {
		development: {
			// This only works without PHP
			/*
			server: {
				baseDir: dev
			},
			*/
			online: true,
			injectChanges: true,
			port: 9999,
			proxy: "127.0.0.1:9999"
		},
		production: {
			// This only works without PHP
			/*
			server: {
				baseDir: dist
			},
			*/
			online: true,
			injectChanges: true,
			port: 9998,
			proxy: "127.0.0.1:9998"
		}
	},
	sass: {
		src:  dev + "/**/*.{sass,scss}",
		dest: dev + "/css", //set to dist
		options: {
			noCache: true,
			compass: false,
			bundleExec: true,
			sourcemap: true,
			outputStyle: "compressed"
		}
	},
	delete: {
		src: dist
	},
	precss: { },
	autoprefixer: {
		browsers: [
			"last 2 versions",
			"safari 5",
			"ie 8",
			"ie 9",
			"opera 12.1",
			"ios 6",
			"android 4"
		],
		cascade: true
	},
	mqpacker: { },
	revision: {
		src: {
			assets: [
				dev + "/css/*.css",
				dev + "/scripts/*.js",
				dev + "/media/images/**/*"
			],
			base: dev
		},
		dest: {
			assets: dist,
			manifest: {
				name: "manifest.json",
				path: dist
			}
		}
	},
	rsync: {
		src: dist + "/**",
		options: {
			destination: "path/to/folder/",
			root: dist,
			hostname: "domain.com",
			username: "user",
			incremental: true,
			progress: true,
			relative: true,
			emptyDirectories: true,
			recursive: true,
			clean: true,
			exclude: [".DS_Store"],
			include: []
		}
	},
	linting: {
		src: [
			dev + "sass/**/*.css",
			//"!" + srcAssets + "/sass/partials/_syntax-highlighting.css",
		],
		options: {
			stylelint: {
				"rules": {
					/* http://stylelint.io/user-guide/example-config/ */
					/* http://stylelint.io/user-guide/about-rules/ */
					
					/*
					"at-rule-blacklist": string|[],
					"at-rule-empty-line-before": "always"|"never",
					"at-rule-name-case": "lower"|"upper",
					"at-rule-name-newline-after": "always"|"always-multi-line",
					"at-rule-name-space-after": "always"|"always-single-line",
					"at-rule-no-unknown": true,
					"at-rule-no-vendor-prefix": true,
					"at-rule-semicolon-newline-after": "always",
					"at-rule-whitelist": string|[],
					"block-closing-brace-empty-line-before": "always-multi-line"|"never",
					"block-closing-brace-newline-after": "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line",
					"block-closing-brace-newline-before": "always"|"always-multi-line"|"never-multi-line",
					"block-closing-brace-space-after": "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line",
					"block-closing-brace-space-before": "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line",
					"block-no-empty": true,
					"block-no-single-line": true,
					"block-opening-brace-newline-after": "always"|"always-multi-line"|"never-multi-line",
					"block-opening-brace-newline-before": "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line",
					"block-opening-brace-space-after": "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line",
					"block-opening-brace-space-before": "always"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line",
					"color-hex-case": "lower"|"upper",
					"color-hex-length": "short"|"long",
					"color-named": "always-where-possible"|"never",
					"color-no-hex": true,
					"color-no-invalid-hex": true,
					"comment-empty-line-before": "always"|"never",
					"comment-no-empty": true,
					"comment-whitespace-inside": "always"|"never",
					"comment-word-blacklist": string|[],
					"custom-media-pattern": string,
					"custom-property-empty-line-before": "always"|"never",
					"custom-property-no-outside-root": true,
					"custom-property-pattern": string,
					"declaration-bang-space-after": "always"|"never",
					"declaration-bang-space-before": "always"|"never",
					"declaration-block-no-duplicate-properties": true,
					"declaration-block-no-ignored-properties": true,
					"declaration-block-no-shorthand-property-overrides": true,
					"declaration-block-properties-order": "alphabetical"|[],
					"declaration-block-semicolon-newline-after": "always"|"always-multi-line"|"never-multi-line",
					"declaration-block-semicolon-newline-before": "always"|"always-multi-line"|"never-multi-line",
					"declaration-block-semicolon-space-after": "always"|"never"|"always-single-line"|"never-single-line",
					"declaration-block-semicolon-space-before": "always"|"never"|"always-single-line"|"never-single-line",
					"declaration-block-single-line-max-declarations": int,
					"declaration-block-trailing-semicolon": "always"|"never",
					"declaration-colon-newline-after": "always"|"always-multi-line",
					"declaration-colon-space-after": "always"|"never"|"always-single-line",
					"declaration-colon-space-before": "always"|"never",
					"declaration-empty-line-before": "always"|"never",
					"declaration-no-important": true,
					"declaration-property-unit-blacklist": {},
					"declaration-property-unit-whitelist": {},
					"declaration-property-value-blacklist": {},
					"declaration-property-value-whitelist": {},
					"font-family-name-quotes": "always-where-required"|"always-where-recommended"|"always-unless-keyword",
					"font-weight-notation": "numeric"|"named",
					"function-blacklist": string|[],
					"function-calc-no-unspaced-operator": true,
					"function-comma-newline-after": "always"|"always-multi-line"|"never-multi-line",
					"function-comma-newline-before": "always"|"always-multi-line"|"never-multi-line",
					"function-comma-space-after": "always"|"never"|"always-single-line"|"never-single-line",
					"function-comma-space-before": "always"|"never"|"always-single-line"|"never-single-line",
					"function-linear-gradient-no-nonstandard-direction": true,
					"function-max-empty-lines": int,
					"function-name-case": "lower"|"upper",
					"function-parentheses-newline-inside": "always"|"always-multi-line"|"never-multi-line",
					"function-parentheses-space-inside": "always"|"never"|"always-single-line"|"never-single-line",
					"function-url-data-uris": "always"|"never",
					"function-url-no-scheme-relative": true,
					"function-url-quotes": "always"|"never",
					"function-whitelist": string|[],
					"function-whitespace-after": "always"|"never",
					"indentation": int|"tab",
					"keyframe-declaration-no-important": true,
					"length-zero-no-unit": true,
					"max-empty-lines": int,
					"max-line-length": int,
					"max-nesting-depth": int,
					"media-feature-colon-space-after": "always"|"never",
					"media-feature-colon-space-before": "always"|"never",
					"media-feature-name-case": "lower"|"upper",
					"media-feature-name-no-vendor-prefix": true,
					"media-feature-no-missing-punctuation": true,
					"media-feature-parentheses-space-inside": "always"|"never",
					"media-feature-range-operator-space-after": "always"|"never",
					"media-feature-range-operator-space-before": "always"|"never",
					"media-query-list-comma-newline-after": "always"|"always-multi-line"|"never-multi-line",
					"media-query-list-comma-newline-before": "always"|"always-multi-line"|"never-multi-line",
					"media-query-list-comma-space-after": "always"|"never"|"always-single-line"|"never-single-line",
					"media-query-list-comma-space-before": "always"|"never"|"always-single-line"|"never-single-line",  
					"no-browser-hacks": true,
					"no-descending-specificity": true,
					"no-duplicate-selectors": true,
					"no-empty-source": true,
					"no-eol-whitespace": true,
					"no-extra-semicolons": true,
					"no-indistinguishable-colors": true,
					"no-invalid-double-slash-comments": true,
					"no-missing-end-of-source-newline": true,
					"no-unknown-animations": true,
					"no-unsupported-browser-features": true,
					"number-leading-zero": "always"|"never",
					"number-max-precision": int,
					"number-no-trailing-zeros": true,
					"property-blacklist": string|[],
					"property-case": "lower"|"upper",
					"property-no-unknown": true,
					"property-no-vendor-prefix": true,
					"property-whitelist": string|[],
					"root-no-standard-properties": true,
					"rule-nested-empty-line-before": "always"|"never",
					"rule-non-nested-empty-line-before": "always"|"never",
					"selector-attribute-brackets-space-inside": "always"|"never",
					"selector-attribute-operator-blacklist": string|[],
					"selector-attribute-operator-space-after": "always"|"never",
					"selector-attribute-operator-space-before": "always"|"never",
					"selector-attribute-operator-whitelist": string|[],
					"selector-attribute-quotes": "always"|"never",
					"selector-class-pattern": string,
					"selector-combinator-space-after": "always"|"never",
					"selector-combinator-space-before": "always"|"never",
					"selector-id-pattern": string,
					"selector-list-comma-newline-after": "always"|"always-multi-line"|"never-multi-line",
					"selector-list-comma-newline-before": "always"|"always-multi-line"|"never-multi-line",
					"selector-list-comma-space-after": "always"|"never"|"always-single-line"|"never-single-line",
					"selector-list-comma-space-before": "always"|"never"|"always-single-line"|"never-single-line",
					"selector-max-empty-lines": int,
					"selector-max-compound-selectors": int,
					"selector-max-specificity": string,
					"selector-nested-pattern": string,
					"selector-no-attribute": true,
					"selector-no-combinator": true,
					"selector-no-id": true,
					"selector-no-qualifying-type": true,
					"selector-no-type": true,
					"selector-no-universal": true,
					"selector-no-vendor-prefix": true,
					"selector-pseudo-class-blacklist": string|[],
					"selector-pseudo-class-case": "lower"|"upper",
					"selector-pseudo-class-no-unknown": true,
					"selector-pseudo-class-parentheses-space-inside": "always"|"never",
					"selector-pseudo-class-whitelist": string|[],
					"selector-pseudo-element-case": "lower"|"upper",
					"selector-pseudo-element-colon-notation": "single"|"double",
					"selector-pseudo-element-no-unknown": true,
					"selector-root-no-composition": true,
					"selector-type-case": "lower"|"upper",
					"selector-type-no-unknown": true,
					"shorthand-property-no-redundant-values": true,
					"string-no-newline": true,
					"string-quotes": "single"|"double",
					"stylelint-disable-reason": "always-before"|"always-after",
					"time-no-imperceptible": true,
					"unit-blacklist": string|[],
					"unit-case": "lower"|"upper",
					"unit-no-unknown": true,
					"unit-whitelist": string|[],
					"value-keyword-case": "lower"|"upper",
					"value-list-comma-newline-after": "always"|"always-multi-line"|"never-multi-line",
					"value-list-comma-newline-before": "always"|"always-multi-line"|"never-multi-line",
					"value-list-comma-space-after": "always"|"never"|"always-single-line"|"never-single-line",
					"value-list-comma-space-before": "always"|"never"|"always-single-line"|"never-single-line",
					"value-no-vendor-prefix": true
					*/
					
					"block-no-empty": true,
					"color-no-invalid-hex": true,
					"declaration-colon-space-after": "always",
					"declaration-colon-space-before": "never",
					"function-comma-space-after": "always",
					"function-url-quotes": "double",
					"media-feature-colon-space-after": "always",
					"media-feature-colon-space-before": "never",
					"media-feature-name-no-vendor-prefix": true,
					"max-empty-lines": 5,
					"number-leading-zero": "never",
					"number-no-trailing-zeros": true,
					"property-no-vendor-prefix": true,
					"rule-no-duplicate-properties": true,
					"declaration-block-no-single-line": true,
					"rule-trailing-semicolon": "always",
					"selector-list-comma-space-before": "never",
					"selector-list-comma-newline-after": "always",
					"selector-no-id": true,
					
					"string-quotes": [2, "double"],
					"color-hex-case": [2, "lower"],
					"value-no-vendor-prefix": 2, //true
					"declaration-no-important": 0,
					"rule-non-nested-empty-line-before": [2, "always", {
						ignore: ["after-comment"]
					}]
				}
			},
			reporter: {
				clearMessages: true,
				throwError: true
			}
		}
	},
	optimize: {
		css: {
			src:  dev + "/css/**/*",
			dest: dist + "/css/"
		},
		scripts: {
			src:  dev + "/scripts/**/*",
			dest: dist + "/scripts/"
		},
		images: {
			src:  dev + "/media/**/*{jpg,jpeg,png,svg}",
			dest: dist + "/media/",
			options: {
				optimizationLevel: 3
			}
		},
		html: {
			src: dev + "/**/*.html",
			dest: dist,
			options: {
				collapseWhitespace: true
			}
		}
	}
};