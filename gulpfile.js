/* global require */
'use strict';

const del = require('del');
const { src, dest, series } = require('gulp');
const gulp_jsdoc = require('gulp-jsdoc3');
const gulp_mocha = require('gulp-mocha');
const gulp_pages = require('gulp-gh-pages');
const gulp_rename = require('gulp-rename');
const gulp_rollup = require('gulp-better-rollup');
const gulp_sourcemaps = require('gulp-sourcemaps');
const gulp_terser = require('gulp-terser');
const rollup_babel = require('rollup-plugin-babel');

const info = require('./package.json');

function clean() {
	return del([
		'target/**/*'
	])
}

function build(done) {
	return src('src/main/consts.js')

			// Initialise source maps from sources.
			.pipe(gulp_sourcemaps.init())

			// Run rollup with babel and commonjs packaging.
			.pipe(gulp_rollup({
				treeshake: false,
				format: 'cjs',
				plugins: [
					rollup_babel({
						presets: [ '@babel/preset-env' ]
					})
				]

			})).on('error', done)

			// Write sourcemaps and output
			.pipe(gulp_sourcemaps.write())
			.pipe(dest('target/dist/'))

			// Minify generated code
			.pipe(gulp_terser()).on('error', done)
			.pipe(gulp_rename({ extname: '.min.js' }))

			// Write minified files and sourcemaps
			.pipe(gulp_sourcemaps.write())
			.pipe(dest('target/dist/'));

}

function test(done) {
	return src('src/test/**/*.spec.js')

			.pipe(gulp_mocha({
				ui: 'bdd',
				reporter: 'spec',
				bail: false,

			})).on('error', done);

}

function docs() {
	return src('src/main/**/*.js', { read: false })

			.pipe(gulp_jsdoc({
				name: info.name,
				description: info.description,
				version: info.version,
				licenses: [info.license],
				opts: {
					destination: "target/docs"
				},

			}));

}

function pages() {
	return src('target/docs/**')
			.pipe(gulp_pages());
}

exports.default = series(
		clean,
		build,
		test,
		docs
);

exports.clean = clean;
exports.build = build;
exports.test = series(build, test);
exports.docs = docs;
exports.pages = series(docs, pages);
