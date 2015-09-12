var gulp = require('gulp');

//多个文件合并为一个文件
var concat = require('gulp-concat');
//压缩js
var uglify = require('gulp-uglify');
//压缩css
var minifyCss = require('gulp-minify-css');

var minifyHtml = require('gulp-minify-html');

//源文件放置的目录：app
var path = {
    js: ['js/**/*.js'],
    css: ['css/**/*.css'],
	html: ['*.html']
};
//合并多个文件
gulp.task("concat-js",function(){
	gulp.src(path.js)
	.pipe(concat('qc.js'))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("concat-css",function(){
	gulp.src(path.css)
	.pipe(concat('qc.css'))
    .pipe(gulp.dest("dist/css"));
});

//压缩js
gulp.task('js', function () {
	gulp.src('js/**/*.js')//1.查找文件
        .pipe(uglify())//2.压缩文件
        .pipe(gulp.dest("dist/js"));//3.生成文件
});

gulp.task('css', function () {
	gulp.src('css/**/*.css')//1.查找文件
        .pipe(minifyCss())//2.压缩文件
        .pipe(gulp.dest("dist/mobile/"));//3.生成文件
});

gulp.task('mobile_js', function () {
	gulp.src('mobile/**/*.js')//1.查找文件
        .pipe(uglify())//2.压缩文件
        .pipe(gulp.dest("dist/mobile/"));//3.生成文件
});

gulp.task('mobile_css', function () {
	gulp.src('mobile/**/*.css')//1.查找文件
        .pipe(minifyCss())//2.压缩文件
        .pipe(gulp.dest("dist/mobile/"));//3.生成文件
});

gulp.task('key_js', function () {
	gulp.src('keycaiPublicity/**/*.js')//1.查找文件
        .pipe(uglify())//2.压缩文件
        .pipe(gulp.dest("dist/keycaiPublicity/"));//3.生成文件
});

gulp.task('key_css', function () {
	gulp.src('keycaiPublicity/**/*.css')//1.查找文件
        .pipe(minifyCss())//2.压缩文件
        .pipe(gulp.dest("dist/keycaiPublicity/"));//3.生成文件
});


gulp.task('html', function () {
	gulp.src("*.html")
        .pipe(minifyHtml({ quotes: true }))
        .pipe(gulp.dest("dist"));
});

/*
gulp.task('watch', function () {
    gulp.watch(path.js, ['js']);
    gulp.watch(path.css, ['css']);
	gulp.watch(path.html, ['html']);
});

gulp.task('default', ['watch']);
*/