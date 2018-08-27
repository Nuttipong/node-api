var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('webpack', function (callback) {
    var config = require('./webpack.production.config');
    webpack(config, function (err, stats) {
        if (err) {
            gutil.log(gutil.colors.red(err));
        }
        gutil.log("[webpack]", stats.toString(config.stats));
        callback();
    });
});

gulp.task('default', ['webpack']);
