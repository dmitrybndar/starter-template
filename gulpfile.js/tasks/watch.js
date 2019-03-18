const {
  gulp,
  bs
} = $;

gulp.task('watch', function () {
  gulp.watch(process.env.WATCH_SCSS, {
    delay: 1000
  }, gulp.series('styles'));
  gulp
    .watch(process.env.WATCH_HTML, {
      delay: 1000
    }, gulp.series('html', bs.reload));
  gulp
    .watch(process.env.WATCH_JS, {
      delay: 1000
    }, gulp.series('scripts', bs.reload));
  gulp.watch(process.env.WATCH_IMG, {
    delay: 1000
  }, gulp.series('img'));
  gulp.watch(process.env.WATCH_STATIC, {
    delay: 1000
  }, gulp.series('copy'));
  gulp.watch(process.env.WATCH_SVG, {
    delay: 1000
  }, gulp.series('svg'));
})