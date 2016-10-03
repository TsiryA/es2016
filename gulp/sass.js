var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var autoprefixer = require('gulp-autoprefixer');
var extend = require('util')._extend;

/*

    SASS TASK

*/

exports.init = function(gulp, browserSync, plumber, sourcemaps, pathsConfig, envConfig) {


    gulp.task('sass', function() {
        return gulp.src(envConfig.sass.src)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(sourcemaps.write('./'))
            .pipe(flatten())
            .pipe(gulp.dest(envConfig.sass.dest))
            .pipe(browserSync.stream({
              match: '**/*.css'
            }));
    });

    for (var prop in pathsConfig.sass) {

        var pageConfig = extend({}, pathsConfig.sass[prop]);

        if (pageConfig.sassPath !== '') {

            (function(prop, gulp, sass, plumber, sourcemaps, sass, flatten, browserSync, pageConfig){
                gulp.task('sass-' + prop, function() {
                    return gulp.src(pageConfig.sassPath)
                        .pipe(plumber())
                        .pipe(sourcemaps.init())
                        .pipe(sass().on('error', sass.logError))
                        .pipe(autoprefixer())
                        .pipe(sourcemaps.write('./'))
                        .pipe(flatten())
                        .pipe(gulp.dest(envConfig.sass.dest))
                        .pipe(browserSync.stream({
                          match: '**/*.css'
                        }));
                });
            })(prop, gulp, sass, plumber, sourcemaps, sass, flatten, browserSync, pageConfig);
        }
    }
};
