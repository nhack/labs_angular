var gulp = require('gulp');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var clean = require('rimraf');
var rename = require('gulp-rename');

gulp.task('inject', function() {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var bower = gulp.src(mainBowerFiles(), {
        read: false
    });

    var vendor = gulp.src(['./vendor/*.js', './vendor/.css'], {
        read: false
    });

    var appSources = gulp.src(['./app/**/*.js', './app/**/*.css'], {
        read: false
    });

    var componentsSources = gulp.src(['./components/**/*.js', './components/**/*.css'], {
        read: false
    });

    return target
        .pipe(inject(bower, {
            name: 'bower'
        }))
        .pipe(inject(vendor, {
            name: 'vendor'
        }))
        .pipe(inject(appSources, {
            name: 'app'
        }))
        .pipe(inject(componentsSources, {
            name: 'components'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('clean', function(cb) {
    var cleanTsk = clean('./vendor/*/', cb);
    gulp.src('./index.html.bak')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('.'));
});