var gulp = require('gulp'),
	gutil = require('util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minHTML = require('gulp-htmlmin'),
	minJson = require('gulp-jsonminify'),
	concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css');

var env,
    jsSources,
    htmlSources,
    jsonSources,
    ouputDir;


var env = process.env.NODE_ENV || 'development';


if (env==='production') {
	outputDir = 'app/build/production/';
	sassStyle = 'compressed';
} else {
	outputDir = 'app/build/development/';
	sassStyle = 'expanded';
}

jsSources = [
	'angular/angular.min.js',
	'angular/angular-ui-router.min.js',
	'angular/angular-resource.min.js',
	'js/main.js'
];




gulp.task('js', function() {
	gulp.src(jsSources)
	  .pipe(concat('script.js'))
	  .pipe(browserify())
	  .pipe(gulpif(env === 'production', uglify()))
	  .pipe(gulp.dest( outputDir + 'js'))
	  .pipe(connect.reload())
});

/* I need to replace gulp-compass as I cannot get it to work properly*/
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(concat('main.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest( outputDir + 'css'));
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('css/*.css', ['minify-css']);
});

gulp.task('default', [ 'js', 'minify-css','watch','connect']);

gulp.task('connect', function() {
	connect.server({
		root: 'app/builds/development',
		livereload: true
	});
});




