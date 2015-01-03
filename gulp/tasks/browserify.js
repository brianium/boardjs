'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    config = require('../config');

gulp.task('browserify', function() {
  return browserify('./' + config.src.root + '/index.js')
    .bundle()
    .pipe(source('board.js'))
    .pipe(gulp.dest(config.dist.root));
});
