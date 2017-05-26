var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var cssnano = require('gulp-cssnano');
var rucksack = require('gulp-rucksack');
var htmlbeautify = require('gulp-html-beautify');

gulp.task("html", function() {
	var options = {
		"indent_size": 4
	}
	return gulp
		.src("src/index.html")
		.pipe(htmlbeautify(options))
		.pipe(gulp.dest("dist"))
		.pipe(browserSync.stream());
});

gulp.task("sass", function() {
    return gulp
        .src("src/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cssmin())
				.pipe(rucksack())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
				.pipe(cssnano())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("serve", ["html", "js", "sass"], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch("src/scss/*.scss", ["sass"]);
    gulp.watch("src/js/*.js", ["js"]);
    return gulp.watch("src/index.html", ["html"]);
    // return gulp.watch("src/index.html").on("change", browserSync.reload);
});

gulp.task("js", function() {
    return gulp.src("src/js/*.js")
		.pipe(jsmin())
		.pipe(gulp.dest("dist/js"));
});

gulp.task("default", [ "serve"]);
