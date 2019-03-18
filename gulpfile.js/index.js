global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
}

require('./paths');
require('./tasks');

const {
  gulp
} = $

const doMagic = gulp.parallel('img', 'svg', 'copy', 'html', 'styles', 'scripts', 'vendors');

gulp.task('deploy', gulp.series(
  'clean',
  doMagic,
  'ftp-upload'
));

gulp.task('build', gulp.series(
  'clean',
  doMagic,
));

gulp.task('start', gulp.series(
  'clean',
  doMagic,
  gulp.parallel('serve', 'watch'),
));