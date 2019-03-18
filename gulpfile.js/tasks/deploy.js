const {
  gulp
} = $;
const config = require('../config');
const ftp = require('vinyl-ftp');
const log = require('fancy-log');

gulp.task('ftp-upload', function () {
  const conn = ftp.create({
    host: config.ftp.host,
    user: config.ftp.user,
    password: config.ftp.password,
    port: config.ftp.port,
    log,
    parallel: 7
  });

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance
  return gulp
    .src('build/**/*.*', {
      base: './build',
      buffer: false
    })

    .pipe(conn.newer(config.ftp.dest)) // only upload newer files
    .pipe(conn.dest(config.ftp.dest));
})