const {
  gulp,
  gp: {
    babel,
    sourcemaps,
    concat
  }
} = $;

gulp.task('scripts', function () {
  return gulp.src(process.env.SRC_JS)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(process.env.BUILD_JS))

})