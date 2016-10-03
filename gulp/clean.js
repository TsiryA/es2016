var clean = require('gulp-clean');

/*

    CLEAN TASK

*/

exports.init = function(gulp, plumber) {

    gulp.task('clean', function() {
        return gulp.src(['app/components/templates/**/*'], {
                read: false
            })
            .pipe(plumber())
            .pipe(clean({force: true}));
    });

};
