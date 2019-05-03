const gulp = require('gulp')
const sass = require('gulp-sass')
const maps = require('gulp-sourcemaps')
const removeEmptyLines = require('gulp-remove-empty-lines')
const prettyHtml = require('gulp-pretty-html')


const publicHTML = './public/**/**/*.html'
const publicDest = './public/'

// compile bootstrap scss to css
const bootstrapSass = () => {
  return gulp.src(['resources/scss/bootstrap.scss'])
  .pipe(maps.init())
  .pipe(sass(
  {
    errLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .pipe(maps.write('./maps'))
  .pipe(gulp.dest('static/css/'))
}

// remove etra white space in html files
const removeWhiteSpace = () => {
  return gulp.src(publicHTML)
  .pipe(removeEmptyLines())
  .pipe(gulp.dest(publicDest))
}

// prettify html nicely
const prettify = () => {
  return gulp.src(publicHTML)
      .pipe(prettyHtml({
          indent_size: 2,
          indent_char: ' ',
          unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
          extra_liners: ['head', 'nav', 'footer', 'section']
      }))
      .pipe(gulp.dest(publicDest))
}

gulp.task('build', gulp.series(bootstrapSass, removeWhiteSpace, prettify))

gulp.task('watch', function() {
  gulp.watch('resources/scss/*.scss', gulp.series(gulp.parallel(bootstrapSass)))
})