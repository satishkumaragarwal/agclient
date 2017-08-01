var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var runSequence = require('run-sequence');
var browserify = require('gulp-browserify');

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    port: 4040,
    livereload: true
  });
});

function swallowError(err) {
  console.log(err);
  this.emit('end');
};
gulp.task('clean', function() {
  return del.sync('www');
});

gulp.task('sass', function() {
  gulp.src('./app/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('www/styles/'))
    .pipe(livereload())
});

gulp.task('copy', function() {
  gulp.src(['./app/**/*.html', '!app/index.html'])
    .pipe(gulp.dest('www'))
    .pipe(livereload())
  gulp.src(['./app/components/**/*'])
    .pipe(gulp.dest('www/components'))
    .pipe(livereload())
  gulp.src(['./app/assets/**/*'])
    .pipe(gulp.dest('www/assets'))
    .pipe(livereload())
  gulp.src(['./app/images/*'])
    .pipe(gulp.dest('www/images/'));
  gulp.src(['./app/fonts/*'])
    .pipe(gulp.dest('www/fonts/'));
  gulp.src(['./app/styles/fonts.css'])
    .pipe(gulp.dest('www/styles/'));
  gulp.src(['./app/styles/fonts/*'])
    .pipe(gulp.dest('www/styles/fonts/'));

});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./app/**/*.html'], ['build-html', 'useref']);
  gulp.watch(['./app/**/*.scss'], ['sass']);
  gulp.watch(['./app/**/*.js'], ['build']);
});

gulp.task('build-html', function() {
  gulp.src(['./app/**/*.html', '!app/index.html'])
    .pipe(gulp.dest('www'))
    .pipe(livereload())
});



gulp.task('build', function() {
  gulp.src('./app/src/main.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('www/'))
    .pipe(livereload())
});

gulp.task('uglify', function() {
  return gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('www/'))
})
gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('www'))
});
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});


gulp.task('default', function() {
  runSequence('clean', ['copy', 'sass', 'useref', 'build'], 'connect', 'watch')
});
