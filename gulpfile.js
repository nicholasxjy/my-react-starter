var gulp = require('gulp');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');

var DIR = {
  css: [
    './node_modules/normalize-css/normalize.css'
  ]
}

gulp.task('common:css', function() {
  return gulp.src(DIR.css)
    .pipe(concat('common.css'))
    .pipe(gulp.dest('./src/assets/css'))
});

gulp.task('inject:devcss', function() {
  var target = gulp.src('./src/index.tpl');
  var sources = gulp.src(['./src/assets/css/common.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});

gulp.task('dev', function(cb) {
  runSequence(
    'common:css',
    'inject:devcss'
  )
});
