require.config({
    baseUrl: 'js',
    paths: {
        angular: '../bower_components/angularjs/angular',
        'requirejs-domready': '../bower_components/domready/domReady',
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        'ui.bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        spin: '../bower_components/spin.js/spin',
        'angular-spinner': '../bower_components/angular-spinner/angular-spinner',
        moment: '../bower_components/momentjs/moment',
        'angular-moment': '../bower_components/angular-momentjs/angular-momentjs',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-ui-router-styles': '../bower_components/angular-ui-router-styles/ui-router-styles',
        'jquery.event.move': '../bower_components/jquery.event.move/js/jquery.event.move',
        'jquery.event.swipe': '../bower_components/jquery.event.swipe/js/jquery.event.swipe',
        modernizr: '../bower_components/modernizr/modernizr',
        'jquery-cookie': '../bower_components/jquery-cookie/jquery.cookie',
        'dayPilot': '../bower_components/day-pilot/daypilot',
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery', 'jquery.event.move', 'jquery.event.swipe']
        },
        'angular-ui-router': {
            exports: 'angular-ui-router',
            deps: ['angular']
        },
        'angular-ui-router-styles' : ['angular', 'angular-ui-router'],
        bootstrap: ['jquery'],
        'dayPilot': {
            deps: [
                'angular'
            ]
        },
        'jquery-cookie': ['jquery'],
        'angular-spinner' : ['spin'],
        'ui.bootstrap': {
            deps: [
                'angular'
            ]
        },
        'angular-moment' : {
            exports: 'angular-moment',
            deps: ['angular','moment']
        },
        'jquery.event.move': ['jquery'],
        'jquery.event.swipe': ['jquery', 'jquery.event.move'],
        modernizr: {
            exports: 'modernizr'
        }
    },
    deps: [
        './bootstrapper'
    ],
    packages: [

    ]
});