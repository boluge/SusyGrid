var 	gulp = require('gulp'),
	compass = require('gulp-compass'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload');

gulp.task('compass', function() {
	return gulp.src('sass/*.sass')
		.pipe(plumber())
		.pipe(compass({
			css: 'css',
			sass: 'sass',
			image: 'img',
			style: 'nested',
			sourcemap: true
		}))
		.pipe(plumber.stop())
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	var server = livereload();

	watch('sass/*.sass', function(files) {
		return files.pipe(compass({
			css: 'css',
			sass: 'sass',
			image: 'img',
			style: 'nested',
			sourcemap: true
		}))
		.pipe(gulp.dest('css/'))
	});

	gulp.watch(['*.html', 'css/*.css']).on('change', function(event){
		server.changed(event.path);
	})
});

gulp.task('default', ['compass', 'watch'], function() {

});