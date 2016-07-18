var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyhtml = require('gulp-minify-html');

var src = 'public/src';
var dist = 'public/dist';

var paths = {
	js: src + '/js/*.js',
	scss: src + '/css/app.scss',
	html: src + '/html/*.html'
}

gulp.task('combine-js', [], function() {
	return gulp.src(paths.js)
		// .pipe(stripDebug())
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dist+'/js'));
});

gulp.task('compile-sass', [], function() {
	return gulp.src(paths.scss)
		.pipe(sass())
		.pipe(gulp.dest(dist+'/css'));
});

// gulp.task('minify-html', [], function() {
// 	return gulp.src(paths.html)
// 		.pipe(minifyhtml())
// 		.pipe(gulp.dest(dist+'/html'));
// });

gulp.task('default', ['combine-js', 'compile-sass']);