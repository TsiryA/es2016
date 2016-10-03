var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var fs = require('fs');

// chargement de json de configuration

var envConfig = JSON.parse(fs.readFileSync(__dirname + '/gulp/config/env_config.json', 'utf8'));
var pathsConfig = JSON.parse(fs.readFileSync(__dirname + '/gulp/config/paths_config.json', 'utf8'));

// import des différentes parties de la configuration Gulp

var _pug = require('./gulp/pug.js');
var _sass = require('./gulp/sass.js');
// var _javascript = require('./gulp/javascript.js');
var _images = require('./gulp/images.js');
var _public = require('./gulp/public.js');

// var _fonts = require('./gulp/fonts.js');
// var _watch = require('./gulp/watch.js');
// var _serve = require('./gulp/serve.js');
var _clean = require('./gulp/clean.js');
// var _bust = require('./gulp/bust.js');
// var _deploy = require('./gulp/deploy.js');

// initialisation des tasks

_pug.init(gulp, browserSync, plumber, pathsConfig, envConfig);
// _sass.init(gulp, browserSync, plumber, sourcemaps, pathsConfig, envConfig);
// _javascript.init(gulp, browserSync, plumber, sourcemaps, pathsConfig, envConfig);
// _images.init(gulp, browserSync, plumber, envConfig);
// _public.init(gulp, browserSync, plumber, envConfig);
// _fonts.init(gulp, browserSync, plumber, envConfig);
// _watch.init(gulp, pathsConfig, envConfig);
// _serve.init(gulp, browserSync);
// _clean.init(gulp, plumber);
// _bust.init(gulp, plumber, envConfig);
// _deploy.init(gulp, plumber, envConfig);

gulp.task('build-text', ['pug', 'sass', 'js', 'public', 'fonts']);
gulp.task('build', ['build-text', 'img']);
gulp.task('default', ['serve']);
