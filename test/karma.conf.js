// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-06-01 using
// generator-karma 0.8.3

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    //preprocessors: {
    //  'app/**/*.js': ['coverage']
    //},
    //
    preprocessors: {
      '**/*.html': ['ng-html2js'],
      'app/**/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [

      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-smart-table/dist/smart-table.min.js',
      'bower_components/underscore/underscore.js',
      'app/modules/**/*.js',
      'app/modules/app.js',
      //'../app/scripts_old/**/*.js',
      //  'test/mock/**/*.js',
      'test/spec/**/*.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DISABLE

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
