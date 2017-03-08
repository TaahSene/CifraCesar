var gulp = require('gulp');

var JSFiles = [ 
	'node_modules/jquery/dist/jquery.min.js', 
	'node_modules/semantic-ui/dist/semantic.min.js',
	'node_modules/vue/dist/vue.min.js',
	'components/cesar/index.js'  ];
var CSSFiles =[
	'node_modules/semantic-ui/dist/semantic.min.css',
	'css/app.css'];
var FONTFiles =[
	'node_modules/semantic-ui/dist/themes/default/assets/fonts/*.*'];

var destinationJs = 'js';
var destinationCss = 'css'; 
var destinationFont = 'css/themes/default/assets/fonts'

gulp.task('copyJs', function () {
    gulp.src(JSFiles)
        .pipe(gulp.dest(destinationJs));
});

gulp.task('copyCss', function () {
    gulp.src(CSSFiles)
        .pipe(gulp.dest(destinationCss));
});

gulp.task('copyFonts', function () {
    gulp.src(FONTFiles)
        .pipe(gulp.dest(destinationFont,{"mode": "0777"}));
});