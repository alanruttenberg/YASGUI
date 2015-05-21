var gulp = require('gulp'),
	connect = require('gulp-connect'),
	paths = require('./paths.js'),
	livereload = require('gulp-livereload'),
	server = require('gulp-express'),
	nodemon = require('gulp-nodemon');

gulp.task('watch', function() {
    gulp.watch(["./src/**/*.js", "./node_modules/yasgui-yasr/dist/yasr.bundled.min.js",
		"./node_modules/yasgui-yasqe/dist/yasqe.bundled.min.js"], [ 'makeBundledCopy', 'browserifyForDebug' ]);
	gulp.watch("./src/**/*.scss", [ 'makeCss' ]);
	  gulp.watch(
		'./*.html'
	, function(files) {
		gulp.src(files.path).pipe(connect.reload());
	});
});

gulp.task('connect', function() {
	connect.server({
		root: [__dirname + '/../', __dirname + '/../server'],
		port : 4000,
		livereload: true
	});
});

gulp.task('connectApi', function() {
	process.env.yasguiDev = 1;
	nodemon({ script: './server/index.js', watch: './server' })
});
