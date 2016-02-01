/* global require */
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');

gulp.task('build', function () {
	return gulp.src('src/main/**/*.js')

			.pipe(gulp.dest('target/dist'));

});

gulp.task('test', function (done) {
	gulp.src('src/test/**/*.spec.js')

			.pipe(mocha({}))

			.on('error', util.log)

			.once('close', done);

});

gulp.task('dist', function () {
	// npm deploy then increment version.
});

gulp.task('default', ['build', 'test']);
