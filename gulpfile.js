const gulp = require('gulp')
const del = require('del')
const log = require('gulplog')
// html-partial dependencies
const htmlPartial = require('gulp-html-partial')
// sass dependencies
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
// js dependencies
const babel = require('gulp-babel')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const babelify = require('babelify')

// clean output folder
gulp.task('clean', ()=>{
  return del(['docs/**/*', '!docs/assets', '!docs/assets/**/*']);
})

// html partial compiler
gulp.task('html', ()=>{
  return gulp.src('src/html/index.html')
    .pipe(htmlPartial({
      basePath: 'src/html/partials/'
    }))
    .pipe(gulp.dest('docs'))
})

// sass bundler
gulp.task('sass', ()=>{
  return gulp.src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(cleanCSS({debug: true}, details => {
    //   console.log(`${details.name}: ${details.stats.originalSize} ==minify=> ${details.stats.minifiedSize}`);
    // }))
    .pipe(gulp.dest('docs'))
})

// javascript browserify, babelify, minify
gulp.task('javascript', ()=>{
  var b = browserify({
    entries: 'src/js/main.js',
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
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('docs'))
})

// return assets
gulp.task('assets', ()=>{
  return gulp.src('src/js/particles.config.json')
    .pipe(gulp.dest('docs'));
})

// default task
gulp.task('default', gulp.series(
  'clean',
  'html',
  'sass',
  'javascript',
))

gulp.task('compile+', gulp.series(
  'clean',
  'html',
  'sass',
  'javascript',
  'assets'
))
