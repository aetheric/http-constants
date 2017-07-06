/* global require */
'use strict';

const del = require('del');
const gulp = require('gulp');
const rollup = require('gulp-better-rollup');
const pages = require('gulp-gh-pages');
const jsdoc = require('gulp-jsdoc3');
const mocha = require('gulp-mocha');
const rename = require('gulp-rename');
const sequence = require('gulp-sequence');
const sourcemaps = require('gulp-sourcemaps');
const traceur = require('gulp-traceur');
const uglify = require('gulp-uglify');
const util = require('gulp-util');

const info = require('./package.json');

const opts = {

	rollup: {
		treeshake: false,
		format: 'cjs'
	},

	mocha: {
		ui: 'bdd',
		reporter: 'spec',
		bail: false
	},

	jsdoc: {
		name: info.name,
		description: info.description,
		version: info.version,
		licenses: [info.license],
		opts: {
			destination: "target/docs"
		}
	}

};

gulp.task('clean', () => del([
	'target/**/*'
]));

gulp.task('build', () => gulp

		.src('src/main/consts.js')
		.pipe(sourcemaps.init())

		.pipe(rollup(opts.rollup))
		.pipe(traceur())
			.on('error', util.log)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('target/dist/'))

		.pipe(uglify())
			.on('error', util.log)
		.pipe(rename({ extname: '.min.js' }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('target/dist/'))

);

gulp.task('test', [ 'build' ], () => gulp
		.src('src/test/**/*.spec.js')
		.pipe(mocha(opts.mocha))
			.on('error', util.log)
);

gulp.task('docs', () => gulp
		.src('src/main/**/*.js', { read: false })
		.pipe(jsdoc(opts.jsdoc))
);

gulp.task('pages', [ 'docs' ], () => gulp
		.src('target/docs/**')
		.pipe(pages())
);

gulp.task('default', sequence(
		'clean',
		'build',
		'test',
		'docs'
));
