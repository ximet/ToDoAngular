var gulp = require('gulp');
var clean = require('gulp-clean');
var	concat = require('gulp-concat');
var	jscs = require('gulp-jscs');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');

gulp.task('test-build', function () {

	gulp.src('./css/main.css')
		.pipe(csso())
		.pipe(gulp.dest('./build/css/'));

	gulp.src('./js/**/*.js')
		.pipe(concat('base.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));
})
