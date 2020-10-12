"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
//const postcss = require("gulp-postcss");
//const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const del = require("del");
const htmlmin = require("gulp-htmlmin");
const minifyjs = require('gulp-js-minify');

gulp.task("css", function () {
    return gulp.src("sass/style.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        //.pipe(postcss([
        //    autoprefixer()
        //]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/css"))
});
gulp.task("html", function () {
    return gulp.src("*.html")
        .pipe(posthtml([
            include()
        ]))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"))
});
gulp.task("sprite", function () {
    return gulp.src(["source/img/logo-*.svg", "source/img/icon-*.svg", "source/img/htmlacadem*.svg"])
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("source/img"))
});
gulp.task("images", function () {
    return gulp.src("source/img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("source/img"));
});
gulp.task("webp", function () {
    return gulp.src("source/img/**/*.{png,jpg,svg}")
        .pipe(webp({quality: 92}))
        .pipe(gulp.dest("source/img"))
});
gulp.task('minify-js', function(){
    return gulp.src('source/js/*.js')
        .pipe(minifyjs())
        .pipe(gulp.dest('source/js'));
});
gulp.task("js", function () {
    return gulp.src("js/*.js")
      .pipe(gulp.dest("build/js"))
});
gulp.task("copy", function () {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2}",
        "source/img/**",
        "source/js/**",
        "source/*.ico"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"));
});
gulp.task("clean", function () {
    return del("build")
});
gulp.task("server", function () {
    server.init({
        server: "build/"
    });

    gulp.watch("js/*.js", gulp.series("js"));
    gulp.watch("sass/**/*.{scss,sass}", gulp.series("css"));
    //gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
    gulp.watch("*.html", gulp.series("html", "refresh"));
});
gulp.task("refresh", function (done) {
    server.reload();
    done();
});

// gulp.task("build", gulp.series("clean", "copy", "css", "sprite", "html"));
gulp.task("build", gulp.series("clean", "css", "js", "html"));
gulp.task("start", gulp.series("build", "server"));
