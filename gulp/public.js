/*

    PUBLIC TASK

*/

exports.init = function(gulp, browserSync, plumber, envConfig) {

    gulp.task('public', function() {
      return gulp.src(envConfig.public.src)
        .pipe(plumber())
        .pipe(gulp.dest(envConfig.public.dest));
    });

  gulp.task('watch-public', ['public'], function() {
    browserSync.reload();
  });
};
