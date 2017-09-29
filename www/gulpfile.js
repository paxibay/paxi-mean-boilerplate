var gulp         = require('gulp');
var karma        = require('gulp-karma');
var nodemon      = require('gulp-nodemon');
var less         = require('gulp-less');
var bless        = require('gulp-bless');
var minify       = require('gulp-minify');
var usemin       = require('gulp-usemin');
var uglify       = require('gulp-uglify');
var minifyCss    = require('gulp-minify-css');
var rev          = require('gulp-rev');
var minifyHtml   = require('gulp-minify-html');
var sourcemaps   = require('gulp-sourcemaps');
var plumber      = require('gulp-plumber');
var jshint       = require('gulp-jshint');
var stylish      = require('jshint-stylish');
var map          = require('map-stream');
var clean        = require('gulp-clean');
var gutil        = require('gulp-util');
var csslint      = require('gulp-csslint');
var urlAdjuster  = require('gulp-css-url-adjuster');
var autoprefixer = require('gulp-autoprefixer');
var browserify   = require('browserify');
var es6ify       = require('es6ify');
var exorcist     = require('exorcist');
var mold         = require('mold-source-map');
var source       = require('vinyl-source-stream');
var livereload   = require('gulp-livereload');
var debug        = require('gulp-debug');
var glob         = require('glob');
var es           = require('event-stream');
var rename       = require('gulp-rename');
// var assetManifest = require('gulp-asset-manifest');

var consoleLogError = function (error) {
    gutil.beep();
    console.log(error.toString());
};

var consoleLogErrorEnd = function (error) {
    gutil.beep();
    console.log(error.toString());
    this.emit('end');
};

gulp.task('less:compile:selectize', function() {
    return gulp.src([
        './public/components/selectize/selectize-bootstrap3.less',
    ])
    .pipe(plumber({ errorHandler: consoleLogErrorEnd }))
    .pipe(less())
    .pipe(gulp.dest('./public/components/selectize'));
});

gulp.task('less:compile:bootstrap', function() {
    return gulp.src([
        './public/components/bootstrap/less/bootstrap.less',
    ])
    .pipe(plumber({ errorHandler: consoleLogErrorEnd }))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../components/bootstrap/less/' }))
    .pipe(gulp.dest('./public/compiled'));
});

gulp.task('less:compile:app', function() {
    return gulp.src([
        './public/app.less'
    ])
    .pipe(plumber({ errorHandler: consoleLogErrorEnd }))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer('last 10 versions', 'ie 8'))
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../' }))
    .pipe(gulp.dest('./public/compiled'));
});

gulp.task('less:compile', ['less:compile:selectize', 'less:compile:bootstrap', 'less:compile:app']);

gulp.task('less:watch', function() {
    gulp.watch([
        './public/app.less',
        './public/css/**/*.less',
        './public/components/**/*.less',
        './public/modules/**/*.less'
    ], ['less:compile']);
});

var CSSlintReporter = function(file) {
  var errorCount = file.csslint.errorCount;
  var plural = errorCount === 1 ? '' : 's';
  var c = gutil.colors;

  gutil.log(c.cyan(errorCount)+' error'+plural+' found in '+c.magenta(file.path));

  file.csslint.results.forEach(function(result) {
    var message = result.error;
    gutil.log(
      c.red('[') +
      (
        typeof message.line !== 'undefined' ?
          c.yellow( 'L' + message.line ) +
          c.red(':') +
          c.yellow( 'C' + message.col )
        :
          c.yellow('GENERAL')
      ) +
      c.red('] ') +
      message.message + '\n' + message.rule.desc + ' (' + message.rule.id + ')\n');
  });
};

gulp.task('css:lint', function() {
    return gulp.src('./public/compiled/app.css')
        .pipe(plumber({ errorHandler: consoleLogErrorEnd }))
        .pipe(csslint({ // https://github.com/CSSLint/csslint/wiki/Rules-by-ID
            'adjoining-classes': false, // maybe true?
            'box-model': false,
            'box-sizing': false,
            'compatible-vendor-prefixes': false,
            'empty-rules': true,
            'fallback-colors': false,
            'floats': true,
            'font-sizes': false,
            'gradients': true,
            'important': false,
            'known-properties': true,
            'outline-none': true,
            'overqualified-elements': true,
            'qualified-headings': true,
            'regex-selectors': false,
            'shorthand': true,
            'text-indent': true,
            'unique-headings': true,
            'universal-selector': false,
            'unqualified-attributes': false,
            'vendor-prefix': true,
            'zero-units': true
        }))
        .pipe(csslint.reporter(CSSlintReporter));
});

gulp.task('js:compileSubModules', function() {
    return glob('./public/modules/**/*.app.js', function(err, files) {
        var tasks = files.map(function(entry) {
            return browserify({ entries: [entry], transform: es6ify, debug: true })
                .bundle()
                .pipe(source(entry))
                .pipe(rename(function(path) {
                    path.dirname = '';
                    // path.extname = '.min.js';
                }))
                .pipe(gulp.dest('./public/compiled/subModules'));
            });
        return es.merge.apply(null, tasks);
    });
});

gulp.task('js:compile', function() {
    return browserify('./public/app.js', { transform: es6ify, debug: true }) // debug is true for sourcemaps
        .bundle()
        .pipe(plumber({ errorHandler: consoleLogError }))
        .pipe(mold.transformSourcesRelativeTo('./public/compiled')) // convert absolute paths to relative ones
        // .pipe(exorcist('./public/compiled/app.js.map')) // extract sourcemap from bundle into a separate map file
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/compiled'));
});

gulp.task('js:watch', function() {
    gulp.watch([
        './public/app.js',
        './public/app/*.js',
        './public/components/**/*.js',
        './public/modules/**/*.js'
    ], ['js:compile']);
});

gulp.task('js:hint', function() {
    return gulp.src([
        '!public/modules/**/*.min.js',
        '!public/modules/billingWidget/**/*.js',
        'public/app.js',
        'public/modules/**/*.js'
    ])
    .pipe(plumber({ errorHandler: consoleLogErrorEnd }))
    .pipe(jshint({ // http://jshint.com/docs/options/
        'browserify': true,
        'node': true,
        'globals': {
            'angular': false
        },
        'asi'      : true,
        'browser'  : true,
        'eqeqeq'   : false,
        'eqnull'   : true,
        'expr'     : true,
        'jquery'   : false,
        'latedef'  : 'nofunc',
        'laxbreak' : true,
        'laxcomma' : false,
        'nonbsp'   : true,
        'strict'   : false,
        'undef'    : true,
        'unused'   : false
    }))
    .pipe(jshint.reporter(stylish));
});

gulp.task('less:clean', function () {
    // clean CSS and CSS.MAP
    return gulp.src('./public/compiled/*.css*', {read: false})
        .pipe(clean());
});

gulp.task('js:clean', function () {
    // clean JS and JS.MAP
    return gulp.src('./public/compiled/*.js*', {read: false})
        .pipe(clean());
});

gulp.task('app:clean', function () {
    // clean dist folder
    return gulp.src('dist/brokerPortal/', {read: false})
        .pipe(clean());
});

gulp.task('app:dist', function() {

    gulp.src('./public/index.html')
    .pipe(usemin({
        js: [
            // removes comments and sourcemap refs too
            //uglify(),
            // rev(),
            // file contains list of final hashed filenames
            // assetManifest({
                // manifestFile: 'dist/brokerPortal/js/manifest.json',
                // bundleName: 'js'
            // })
        ],
        css: [
            // alter all urls to be non-relative
            urlAdjuster({ replace: ['../../../../','../'] }),
            urlAdjuster({ replace: ['../../../','../'] }),
            urlAdjuster({ replace: ['../../','../'] }),
            // removes sourcemap refs too
            minifyCss({ keepSpecialComments: 0 }),
            // revision with hash in filename
            // rev(),
            // split up the CSS file if too big for IE
            bless({
                cacheBuster: false,
                cleanup: true,
                compress: false,
                force: false,
                imports: false
            }),
            // file contains list of final hashed filenames
            // assetManifest({
                // manifestFile: 'dist/brokerPortal/css/manifest.json',
                // bundleName: 'css'
            // })
        ]
    }))
    .pipe(gulp.dest('dist/brokerPortal/'));

    gulp.src('./public/modules/**/*.html')
    .pipe(gulp.dest('dist/brokerPortal/modules/'));

    gulp.src('./public/views/**/*.html')
    .pipe(gulp.dest('dist/brokerPortal/views/'));

    gulp.src('./public/img/**/*.*')
    .pipe(gulp.dest('dist/brokerPortal/img/'));

    gulp.src('./public/fonts/**/*.*')
    .pipe(gulp.dest('dist/brokerPortal/fonts/'));
});

function useKarma(autotest) {
  return function() {
    return gulp.src([
        './public/bower_components/jquery/dist/jquery.js',
        './public/bower_components/angular/angular.js',
        './public/bower_components/angular-animate/angular-animate.js',
        './public/app.js',
        './test/spec/**/*.js'
      ])
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: autotest ? 'watch' : 'run'
      }));
  };
}

gulp.task('test', useKarma(false));
gulp.task('autotest', useKarma(true));

gulp.task('build', ['app:clean', 'less:compile', 'js:compile', 'js:compileSubModules', 'app:dist']);
gulp.task('dev', ['less:clean', 'js:clean', 'less:compile', 'js:compile', 'less:watch', 'js:watch']);
