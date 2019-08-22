const {
  gulp,
  bs,
  gp: { plumber, sass, sourcemaps, autoprefixer }
} = $;

gulp.task('styles', function() {
  return gulp
    .src(process.env.SRC_STYLES)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(process.env.BUILD_CSS))
    .pipe(
      bs.reload({
        stream: true
      })
    );
});
