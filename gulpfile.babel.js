import webpack from 'webpack-stream';
import gulp from 'gulp';

import pug from 'gulp-pug';

import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import csso from 'gulp-csso';
import autoprefixer from 'autoprefixer';
import normalize from 'node-normalize-scss';

import del from 'del';
import rename from 'gulp-rename';

import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import svgstore from 'gulp-svgstore';

import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config';

const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");

const server = browserSync.create();

gulp.task('pug', () => gulp.src('src/pug/pages/*.{pug,html}')
  .pipe(plumber())
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('build')));

gulp.task('css', () => gulp.src('src/sass/style.scss')
  .pipe(plumber())
  .pipe(sass({
    includePaths: normalize.includePaths,
  }))
  .pipe(postcss([
    autoprefixer({
      browsers: [
        'last 2 versions',
        'IE 11',
      ],
    }),
  ]))
  .pipe(csso())
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream()));

gulp.task('clean', () => del('build'));

gulp.task('copy', () => gulp.src([
  'src/fonts/**/*.{woff,woff2}',
  'src/img/**/*',
  'src/pixelglass/**/*',
  '!src/img/sprite/*',
  '!src/img/sprite',
], {
  base: 'src',
})
  .pipe(gulp.dest('build')));

gulp.task('sprite', () => gulp.src('src/img/sprite/*.svg')
  .pipe(svgstore({
    inlineSvg: true,
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img')));

gulp.task('js', () => gulp.src('src/js/index.js')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('build/js')));

gulp.task('server', () => {
  server.init({
    server: 'build/',
  });

  gulp.watch('src/sass/**/*.{scss,sass}', gulp.series('css', 'refresh'));
  gulp.watch('src/**/*.{pug,html}', gulp.series('pug', 'refresh'));
  gulp.watch('src/img/**/*', gulp.series('copy', 'sprite', 'pug', 'refresh'));
  gulp.watch('src/js/**/*', gulp.series('js', 'refresh'));
});

gulp.task('refresh', (done) => {
  server.reload();
  done();
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel(
    'copy',
    'css',
  ),
  gulp.parallel(
    'sprite',
  ),
  gulp.parallel(
    'pug',
    'js',
  ),
));

gulp.task('start', gulp.series(
  'clean',
  gulp.parallel(
    'copy',
    'css',
  ),
  'sprite',
  gulp.parallel(
    'pug',
    'js',
  ),
  'server',
));

gulp.task("images", function () {
  return gulp
    .src("src/img/**/*.+(png|jpg|gif|svg)")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img"));
});
// Таски для отпимизации изображений, использование через - npx gulp webp *taskname*
// gulp.task('images', () => gulp.src('build/img/**/*.png')
//   .pipe(imagemin([
//     imageminPngquant({ quality: [0.6, 0.8] }),
//     imagemin.jpegtran({ progressive: true }),
//     imagemin.svgo({
//       plugins: [
//         { removeViewBox: false },
//       ],
//     }),
//   ]))
//   .pipe(gulp.dest('build/img')));

// gulp.task('svg', () => gulp.src('src/img/sprite/*.svg')
//   .pipe(imagemin([
//     imagemin.svgo({
//       plugins: [
//         { removeViewBox: false },
//       ],
//     }),
//   ]))
//   .pipe(gulp.dest('src/img/sprite')));

// convert webP


  gulp.task("exportWebP", function () {
    let src = "src/img/**/*.{png,jpg}"; // Where your PNGs are coming from.
    let dest = "src/img/imgWebP"; // Where your WebPs are going.

    return gulp
      .src(src)
      .pipe(
        imagemin([
          webp({
            quality: 75,
          }),
        ])
      )
      .pipe(extReplace(".webp"))
      .pipe(gulp.dest(dest));
  });