var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var cssmin = require("gulp-cssmin");
var jsmin = require("gulp-jsmin");
var cssnano = require("gulp-cssnano");
var rucksack = require("gulp-rucksack");
var htmlbeautify = require("gulp-html-beautify");
var imagemin = require("gulp-imagemin");
var runSequence = require("run-sequence");
var gulpif = require("gulp-if");
var del = require("del");

var dist = "./dist";

gulp.task("img", function () {
  return gulp
    .src("./src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img"));
});

gulp.task("html", function () {
  var options = {
    indent_size: 4
  };
  return gulp
    .src("src/index.html")
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream());
});

gulp.task("sass", function () {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rucksack())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: true
      })
    )
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("serve", ["html", "js", "sass", "img", "copy-roboto", "copy-icomoon"],
  function () {
    browserSync.init({
      server: {
        baseDir: "."
      }
    });
    gulp.watch("./src/img/**/*", ["img"]);
    gulp.watch("src/scss/**/*.scss", ["sass"]);
    gulp.watch("src/js/*.js", ["js"]).on("change", browserSync.reload);
    return gulp.watch("./*.html").on("change", browserSync.reload);
  }
);

gulp.task("js", function () {
  return gulp.src("src/js/*.js").pipe(jsmin()).pipe(gulp.dest("dist/js"));
});

gulp.task("copy-roboto", function () {
  gulp
    .src("node_modules/mdbootstrap/font/roboto/*")
    .pipe(gulp.dest("dist/font/roboto"));
});

gulp.task("copy-icomoon", function () {
  gulp.src("src/font/profitcreationsgithub/fonts/*").pipe(gulp.dest("dist/css/fonts"));
});

gulp.task("del", function() {
  return del("./dist");
});

gulp.task("default", function () {
  runSequence("del", "serve");
});
