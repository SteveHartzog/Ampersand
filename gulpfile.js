var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('scripts', function() {
   // Single entry point to browserify
   gulp.src('client/app.js')
      .pipe(browserify({
         insertGlobals : true,
         debug : !gulp.env.production
      }))
      .pipe(gulp.dest('./public/js'))
});


