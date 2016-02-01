/* global require */
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');
var jsdoc = require('gulp-jsdoc');
var pages = require('gulp-gh-pages');

var info = require('./package.json');

gulp.task('build', function () {
	return gulp.src('src/main/**/*.js')

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

gulp.task('docs', function () {
	return gulp.src('src/main/**/*.js')

			.pipe(jsdoc.parser({
				name: info.name,
				description: info.description,
				version: info.version,
				licenses: [ info.license ]

			}))

			.pipe(jsdoc.generator('target/docs'));

});

gulp.task('pages', [ 'docs' ], function() {
	return gulp.src('target/docs')

		.pipe(pages());

});

gulp.task('default', ['build', 'test', 'docs' ]);
