const { src, dest, watch } = require("gulp");
const stylus = require("gulp-stylus");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const babel = require("gulp-babel");

function compileStyl() {
    return src("./styles/stylus/main.styl")
        .pipe(stylus())
        .pipe(autoprefixer({
            grid: "autoplace"
        }))
        .pipe(dest("./styles/css"))
}

function jsTranspile() {
    return src("./script/app.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(uglify())
        .pipe(rename("./script/app.mini.js"))
        .pipe(sourcemaps.write())
        .pipe(dest("./"))
}

function watchStyl() {
    watch('./styles/stylus/main.styl', compileStyl);
}

function watchJs() {
    watch('./script/app.js', jsTranspile);
}

exports.watchJs = watchJs;
exports.watchStyl = watchStyl;
exports.compileStyl = compileStyl;