module.exports = function(config) {
    config.set({
        basePath: '../',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-bootstrap/ui-bootstrap.js',
            'node_modules/angular-ui-bootstrap/ui-bootstrap-tpls.js',
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

        reporters: [
            'dots'
        ]
    });
};