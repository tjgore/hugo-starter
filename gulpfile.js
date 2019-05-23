const gulp = require('gulp')
const removeEmptyLines = require('gulp-remove-empty-lines')
const prettyHtml = require('gulp-pretty-html')
const purgecss = require('gulp-purgecss')

const publicHTML = './public/**/**/*.html'
const publicDest = './public/'
const publicCSSDest = './public/css/'

// remove unused css
const removeUnusedCss = () => {
  return gulp.src('./public/css/*.css')
  .pipe(
    purgecss({
      content: [publicHTML]
    })
  )
  .pipe(gulp.dest(publicCSSDest))
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
  }))
  .pipe(gulp.dest(publicDest))
}

gulp.task('build', gulp.series(removeWhiteSpace, prettify, removeUnusedCss))
