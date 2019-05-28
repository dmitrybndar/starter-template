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

const doMagic = gulp.parallel('img', 'svg', 'copy', 'html', 'styles', 'scripts:build', 'vendors');

gulp.task('build', gulp.series(
  'clean',
  doMagic
));

gulp.task('dev', gulp.parallel('serve', 'watch', 'scripts:watch'));

gulp.task('build', gulp.series(
  'clean',
  doMagic
));

gulp.task('start', gulp.series('build', 'dev'));

gulp.task('deploy', gulp.series(
  'build',
  'ftp-upload'
));