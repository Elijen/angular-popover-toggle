module.exports = function(config) {
    var configuration = {
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
            'Chrome',
            'Firefox'
        ],

        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },

        reporters: [
            'dots'
        ]
    };

    if(process.env.TRAVIS) {
        configuration.browsers = ['Chrome_travis_ci'];
    }

    config.set(configuration);
};