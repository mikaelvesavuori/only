const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const VendorChunkPlugin = require("webpack-vendor-chunk-plugin");
//const BowerWebpackPlugin = require("bower-webpack-plugin");
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: 'source-map',
	watch: true,
	entry: {
		app: path.resolve(__dirname, "./app/scripts/jsx/app.jsx"),
		tsapp: path.resolve(__dirname, "./app/scripts/ts/app.ts")
	},
	output: {
		path: path.resolve(__dirname, "./app/scripts/compiled/"),
		filename: "[name].js"
	},
	resolve: {
		modules: [
			path.join(__dirname, "./app/scripts/"), "node_modules"
		],
		extensions: [
			".js", ".jsx", ".ts", ".tsx"
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				query: {
					presets: [
						["es2015", { loose: true, modules: false }],
						"react",
					],
					plugins: [
						"transform-es2015-modules-commonjs"
						//"transform-class-properties",
						//"transform-runtime"
					]
				}
				//exclude: /(node_modules|bower_components)/,
			},
			{ enforce: 'pre', test: /\.js$/, loader: "source-map-loader" },
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }
		]
	},
	plugins: [
		/*
		new webpack.optimize.CommonsChunkPlugin({
			name: "react",
			minChunks: Infinity,
			filename: "react.js"
		}),
		*/
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				keep_fnames: true,
				screw_ie8: true,
			},
			compress: {
				// sourcemaps: true,
				screw_ie8: true,
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
			},
			output: {
				comments: false,
			}
		})

		/*
		new HtmlWebpackPlugin({
			template: "./_mockups/standard.html"
		}),
		*/

		/*
		new BowerWebpackPlugin({
			modulesDirectories: ["./bower_components"],
			manifestFiles: "bower.json",
			includes: /.star/,
			excludes: [],
			searchResolveModulesDirectories: true
		}),
		*/
	]
}
