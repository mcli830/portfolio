const gulp = require('gulp');
const clean = require('gulp-clean');
const log = require('gulplog');
// sass dependencies
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
// js dependencies
const babel = require('gulp-babel');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('babelify');

// clean output folder
gulp.task('clean', () => {
  return gulp.src('./docs', {read: false})
    .pipe(clean());
})

// sass bundler
gulp.task('sass', () => {
  return gulp.src('./src/sass/bundle.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs'));
});

// javascript browserify, babelify, minify
gulp.task('javascript', () => {
  var b = browserify({
    entries: './src/js/main.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['@babel/preset-env']
    })]
  })
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .on('error', log.error)
    .pipe(sourcemaps.write('./maps/'))
    .pipe(gulp.dest('./docs'));
});

// create task
gulp.task('default', gulp.series(
  'clean',
  'sass',
  'javascript'
));
