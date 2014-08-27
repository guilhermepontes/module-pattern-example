var gulp   = require('gulp'),
    karma  = require('gulp-karma');

var GulpApp = {
  config: {
    testFiles: [
      'src/module-app.js',
      'spec/app-spec.js'
    ],

    action: "run"
  },

  test: function() {
    return gulp.src(GulpApp.config.testFiles)
      .pipe(
        karma({
          configFile: 'karma.conf.js',
          action: GulpApp.config.action
        })
      );
  },

  default: function() {
    GulpApp.config.action = "watch";
    return GulpApp.test();
  }
};

gulp.task('test', GulpApp.test);
gulp.task('default', GulpApp.default);