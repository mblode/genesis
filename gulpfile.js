var gulp = require('gulp'),
  concat = require('gulp-concat'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  cssnano = require('cssnano'),
  browserSync = require('browser-sync'),
  folder = {
    src: 'src/',
    build: 'public/assets/',
  };

gulp.task('browser-sync', function () {
  browserSync({
    proxy:  'https://genesis.dev',
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('css', function () {
  var postCssOpts = [
    autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
    mqpacker,
    cssnano,
  ];

  return gulp.src(folder.src + 'scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: true,
    }))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest(folder.build + 'css/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function (){
  return gulp.src(
    [
      folder.src + 'js/jquery.js',
      folder.src + 'js/bootstrap.js',
      folder.src + 'js/flickity.js',
      folder.src + 'js/lazysizes.js',
      folder.src + 'js/main.js',
      folder.src + 'js/**/*.js',

    ])
    .pipe(concat('main.js'))
    .pipe(stripdebug())
    .pipe(uglify())
    .pipe(gulp.dest(folder.build + 'js/'))
    .pipe(browserSync.reload({ stream: true }));
});

// run all tasks
gulp.task('run', ['css', 'js']);

gulp.task('watch', ['browser-sync'], function (){
  // javascript changes
  gulp.watch(folder.src + 'js/**/*', ['js']);
  // css changes
  gulp.watch(folder.src + 'scss/**/*', ['css']);
});

// default task
gulp.task('default', ['run', 'watch']);
