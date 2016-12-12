var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename')
    //语法检查
    
    //压缩css
    gulp.task('minifyjs', function() {
        return gulp.src('js/*.js')    //需要操作的文件
            .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
            .pipe(uglify())   //执行压缩
            .pipe(gulp.dest('Js'));   //输出文件夹
    });
    //压缩，合并 js
    gulp.task('minifyjcss', function() {
        return gulp.src('css/*.css')      //需要操作的文件
            .pipe(concat('main.css'))    //合并所有js到main.js
            .pipe(gulp.dest('css'))       //输出到文件夹
            .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
            .pipe(minifycss())    //压缩
            .pipe(gulp.dest('Css'));  //输出
    });