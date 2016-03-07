var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');


gulp.task('imagemin', function () {
  gulp.src('sources/**')
      .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
      .pipe(gulp.dest('images'))
      .pipe(notify({ message: 'imagemin task complete' }));
})

gulp.task('styles', function() {
  return sass('styles/sass/**', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('styles/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('watch', function() {

  // 看守所有.scss档
  gulp.watch('styles/sass/**', ['styles']);

  // 看守所有.js档
  // gulp.watch('scripts/*.js', ['scripts']);

  // 看守所有图片档
  gulp.watch('sources/**', ['imagemin']);

});

gulp.task('compressjs', function () {
  gulp.src('scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('release/scripts'))
})
