module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular-mocks.js',
            'src/ngBrowserInfo.js',
            'test/ngBrowserInfoSpec.js'
        ],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],
        reporters: ['progress', 'junit', 'coverage'],
        junitReporter: {
            outputFile: 'log/karma-results.xml',
            suite: 'unit'
        },
        coverageReporter: {
            type : 'text',
            dir : 'log/',
            file : 'karma-coverage.txt'
        },
        preprocessors: {
            '**/src/*.js': 'coverage'
        },
        port: 9876,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        colors: true,
        logLevel: config.LOG_INFO
    });
};
