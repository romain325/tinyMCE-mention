var gulp = require('gulp'),
    bower = require('gulp-bower'),
    jshint = require('gulp-jshint'),
    qunit = require('gulp-qunit');

gulp.task('lint', gulp.series(function () {
    return gulp.src(['./mention/plugin.js', './tests/test_mention.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
}));

gulp.task('bower', gulp.series(() => {
    return bower();
}));

gulp.task('test', gulp.series('bower', function () {
    return gulp.src('./tests/test_runner.html')
        .pipe(qunit({ timeout: 10 }));
}));

gulp.task('default', gulp.series('lint'));