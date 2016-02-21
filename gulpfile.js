/* global require */
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');
var jsdoc = require('gulp-jsdoc3');
var pages = require('gulp-gh-pages');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var traceur = require('gulp-traceur-compiler');

require('mocha-traceur');

var info = require('./package.json');

gulp.task('build', function () {
	return gulp.src('src/main/**/*.js')

			.pipe(sourcemaps.init())

			.pipe(traceur())

			.pipe(concat('http-constants.js'))

			.pipe(gulp.dest('target/dist'))

			.pipe(uglify())

			.pipe(rename({
				extname: '.min.js'
			}))

			.pipe(sourcemaps.write('.'))

			.pipe(gulp.dest('target/dist'));

});

gulp.task('test', function (done) {
	gulp.src('src/test/**/*.spec.js')

			.pipe(mocha({
				ui: 'bdd',
				reporter: 'spec',
				bail: false,
				grep: '^.+\\.spec\\..+$',
				compilers: {
					js: 'mocha-traceur'
				}
			}))

			.on('error', util.log)

			.once('close', done);

});

gulp.task('docs', function (done) {
	gulp.src('src/main/**/*.js', { read: false })

			.pipe(jsdoc({
				name: info.name,
				description: info.description,
				version: info.version,
				licenses: [ info.license ],
				opts: {
					destination: "target/docs"
				}

			}, done));

});

gulp.task('pages', [ 'docs' ], function() {
	return gulp.src('target/docs')

		.pipe(pages());

});

gulp.task('default', ['build', 'test', 'docs' ]);
