var gulpIf = require('gulp-if');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var tinify = require('./TinifyImages.js');

/*

    IMG TASK

*/

exports.init = function(gulp, browserSync, plumber, envConfig) {

    gulp.task('imagemin', ['tinify-images'], function() {
        return gulp.src(envConfig.img.src)
            .pipe(plumber())
            .pipe(gulpIf(gulpIf.isFile, cache(imagemin({
                    progressive: true,
                    interlaced: true,
                    // don't remove IDs from SVGs, they are often used
                    // as hooks for embedding and styling
                    svgoPlugins: [{
                        cleanupIDs: false
                    }]
                }))
                .on('error', function(err) {
                    console.log(err);
                    this.end();
                })))
            .pipe(gulp.dest(envConfig.img.tinyDest));
    });

    gulp.task('tinify-images', function(done) {
        tinify.run(done);
    });

    gulp.task('img', ['imagemin'], function() {
        return gulp.src(envConfig.img.tinySrc)
            .pipe(gulp.dest(envConfig.img.dest));
    });

    gulp.task('watch-img', ['img'], function() {
        browserSync.reload();
    });
};
