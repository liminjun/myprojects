var gulp = require('gulp');

//����ļ��ϲ�Ϊһ���ļ�
var concat = require('gulp-concat');
//ѹ��js
var uglify = require('gulp-uglify');
//ѹ��css
var minifyCss = require('gulp-minify-css');

var minifyHtml = require('gulp-minify-html');

//Դ�ļ����õ�Ŀ¼��app
var path = {
    js: ['js/**/*.js'],
    css: ['css/**/*.css'],
	html: ['*.html']
};
//�ϲ�����ļ�
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

//ѹ��js
gulp.task('js', function () {
	gulp.src('js/**/*.js')//1.�����ļ�
        .pipe(uglify())//2.ѹ���ļ�
        .pipe(gulp.dest("dist/js"));//3.�����ļ�
});

gulp.task('css', function () {
	gulp.src('css/**/*.css')//1.�����ļ�
        .pipe(minifyCss())//2.ѹ���ļ�
        .pipe(gulp.dest("dist/mobile/"));//3.�����ļ�
});

gulp.task('mobile_js', function () {
	gulp.src('mobile/**/*.js')//1.�����ļ�
        .pipe(uglify())//2.ѹ���ļ�
        .pipe(gulp.dest("dist/mobile/"));//3.�����ļ�
});

gulp.task('mobile_css', function () {
	gulp.src('mobile/**/*.css')//1.�����ļ�
        .pipe(minifyCss())//2.ѹ���ļ�
        .pipe(gulp.dest("dist/mobile/"));//3.�����ļ�
});

gulp.task('key_js', function () {
	gulp.src('keycaiPublicity/**/*.js')//1.�����ļ�
        .pipe(uglify())//2.ѹ���ļ�
        .pipe(gulp.dest("dist/keycaiPublicity/"));//3.�����ļ�
});

gulp.task('key_css', function () {
	gulp.src('keycaiPublicity/**/*.css')//1.�����ļ�
        .pipe(minifyCss())//2.ѹ���ļ�
        .pipe(gulp.dest("dist/keycaiPublicity/"));//3.�����ļ�
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