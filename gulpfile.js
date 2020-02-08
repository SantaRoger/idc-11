
var gulp		= require('gulp'),
	$			= require('gulp-load-plugins')();


gulp.task('sass:compile', function(){
	return gulp.src('app/assets/styles/style.scss')
		.pipe($.sass({
			style:'expanded'
		}))
		.on('error', function(err){
			console.error(err);
			$.notify.onError({
				title:'SASS Failed',
				message: 'Errors compiling stylesheets'
			})
		})
		.pipe(gulp.dest('assets/styles'))
		.pipe($.notify({
			message:'Styles compiled'
		}));
});