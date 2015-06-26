define([ 'require', 'angular', 'angular-ui-router', 'routes', 'app', 'bootstrap' ], function (require, ng) {
    'use strict';

    require([ 'requirejs-domready!' ], function (document) {
        ng.bootstrap(document, [ 'app' ]);
    });
});
