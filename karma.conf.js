module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './node_modules/angular/angular.min.js',
            './node_modules/angular-mocks/angular-mocks.js',
            'src/ngBrowserInfo.js',
            'src/*.spec.js'
        ],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-babel-preprocessor'
        ],
        reporters: ['progress', 'junit', 'coverage'],
        junitReporter: {
            outputFile: 'log/karma-results.xml',
            suite: 'unit'
        },
        coverageReporter: {
            type : 'html',
            dir : 'log/',
            file : 'karma-coverage.html'
        },
        preprocessors: {
            'src/**/*.js': ['babel', 'coverage']
        },
        port: 9876,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        colors: true,
        logLevel: config.LOG_INFO
    });
};
