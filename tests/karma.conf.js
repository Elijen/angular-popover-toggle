module.exports = function(config) {
    config.set({
        basePath: '../',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-bootstrap/dist/ui-bootstrap.js',
            'node_modules/angular-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'popover-toggle.js',
            'tests/suite/*.js'
        ],

        frameworks: [
            'jasmine'
        ],

        browsers: [
            'Chrome'
        ],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ]
    });
};