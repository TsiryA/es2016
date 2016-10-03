/*

    FONTS TASK

*/

exports.init = function(gulp, browserSync, plumber, envConfig) {

  gulp.task('fonts', function() {
    return gulp.src(envConfig.fonts.src)
      .pipe(plumber())
      .pipe(gulp.dest(envConfig.fonts.dest))
      .pipe(browserSync.stream({
        match: '**/*.{eot,svg,ttf,woff,woff2}'
      }));
  });
};
