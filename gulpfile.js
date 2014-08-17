var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src(['./node_modules/normalize.css/normalize.css', './lib/base.css'])
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./dist/'))
});
