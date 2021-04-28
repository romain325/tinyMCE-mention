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

gulp.task('test', gulp.series('bower', () => {
    // run export OPENSSL_CONF=/etc/ssl before 
    return gulp.src('./tests/test_runner.html')
        .pipe(qunit({'phantomjs-options': ['--ssl-protocol=any'], 'binPath': require('phantomjs2').path}));
}));

gulp.task('default', gulp.series('lint'));