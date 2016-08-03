var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


    gulp.task('serve', ['sass'], function() {

        browserSync.init({
            server: "./"
        });

        gulp.watch("./sass/*.scss", ['sass']);
        gulp.watch("./*.html").on('change', browserSync.reload);
        gulp.watch("./*.css").on('change', browserSync.reload);

    });


    gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
    });

    gulp.task('default', ['serve']);
