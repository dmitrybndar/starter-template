const {
  gulp,
  gp: {
    fileInclude,
    htmlBeautify,
  }
} = $;

gulp.task('html', function () {
  const beautifyOptions = {
    "indent_size": 2,
    "indent_char": " ",
  };

  return gulp
    .src(process.env.SRC_HTML)
    .pipe(
      fileInclude({
        prefix: '<!--',
        suffix: '-->',
        basepath: process.env.SRC_HTML_PARTIALS
      })
    )
    .pipe(htmlBeautify(beautifyOptions))
    .pipe(gulp.dest(process.env.BUILD_HTML));
})