var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// COMPILE SASS

//  styles is the name of the task, followed by it's functionality
 gulp.task('styles', function(){
// source file
 gulp.src('./scss/main.scss')
    .pipe(sass())
// pipes to destination
    .pipe(gulp.dest('./css'))
// tell browserSync to reload
    .pipe(browserSync.reload({stream: true}));
 });

// BROWSERSYNC

gulp.task('serve', function() {

// initializing browsersync, telling it where to serve from

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

// watch for any changes, every scss file in the scss directory and running the styles task everytime something changes. whenever this runs, browserSync
// will reload all your browser
    gulp.watch('./scss/*.scss', ['styles']);
// upon change of any html will reload browserSync
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

// include the tasks that ive created in an order that makes sense. in other words, run this when i run gulp

gulp.task('default', ['styles', 'serve']);




    // gulp.task('serve', ['sass'], function() {
    //
    //     browserSync.init({
    //         server: "./"
    //     });
    //
    //     gulp.watch("./sass/*.scss", ['sass']);
    //     gulp.watch("./*.html").on('change', browserSync.reload);
    //     gulp.watch("./*.css").on('change', browserSync.reload);
    //
    // });
    //
    //
    // gulp.task('sass', function() {
    // return gulp.src("./sass/*.scss")
    //     .pipe(sass())
    //     .pipe(gulp.dest("./css"))
    //     .pipe(browserSync.stream());
    // });
    //
    // gulp.task('default', ['serve']);
