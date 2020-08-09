const gulp=require("gulp");
const sass=require("gulp-sass");
const pump=require("pump");
const plumber=require("gulp-plumber");
const gutil=require("gulp-util");
const beeper = require('beeper');
const autoprefixer=require("gulp-autoprefixer")
const sourcemaps=require("gulp-sourcemaps")
const cleanCSS=require("gulp-clean-css")
const browserSync=require("browser-sync").create();



const onError=function(){
    notify.onError({
        title:"Gulp error in" + err.plugin,
        message:err.toString(),
    })(err);
    beeper(3);
    this.emit("end");
    gutil.log(gutil.colors.red(err));
}


gulp.task("serve",function(){
    gulp.watch("public/scss/*.scss",gulp.series("sass"));
})

gulp.task(
    "sass",
    gulp.series(function(cb){
        pump(
            [
                gulp.src("public/scss/*.scss"),
                plumber({errorHandler:onError}),
                sourcemaps.init(),
                sass({outputStyle:"expanded"}).on("error",sass.logError),
                autoprefixer({
                    browsers:["last 2 versions"],
                    cascade:false,
                }),
                sourcemaps.write(),
                gulp.dest("public/css"),
                cleanCSS(),
                browserSync.stream(),
            ],
            cb,
        );
    })
);


gulp.task("default",gulp.parallel("sass","serve"));