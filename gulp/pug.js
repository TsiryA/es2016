var pug = require('gulp-pug');

/*

    PUG TASK

*/

exports.init = function(gulp, browserSync, plumber, pathsConfig, envConfig) {

    gulp.task('pug', function() {
        return gulp.src(envConfig.pug.pagesSrc)
            .pipe(plumber())
            .pipe(pug())
            .pipe(gulp.dest(envConfig.pug.dest));
    });

    gulp.task('watch-pug', ['pug'], function() {
        browserSync.reload();
    });

    for (var prop in pathsConfig.pug) {
        var pageConfig = pathsConfig.pug[prop];
        if (pageConfig.pugPath !== '') {

            (function(pageConfig, prop, plumber, pug, browserSync) {

                gulp.task('pug-' + prop, function() {
                    var filePath = pageConfig.pugPath.replace(envConfig.pug.pagesDir, '').split('/');
                    filePath.pop()
                    var dirSuffix = filePath.join('/');
                    return gulp.src(pageConfig.pugPath)
                        .pipe(plumber())
                        .pipe(pug())
                        .pipe(gulp.dest(envConfig.pug.dest + '/' + dirSuffix))
                });

                gulp.task('watch-pug-' + prop, ['pug-' + prop], function() {
                    browserSync.reload();
                });

            })(pageConfig, prop, plumber, pug, browserSync);
        }
    }
};
