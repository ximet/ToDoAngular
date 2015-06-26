define([
    'angular',
    'angular-ui-router',
    'angular-ui-router-styles',
    'angular-spinner',
    'moment',
    'angular-moment',
    'ui.bootstrap',
    'jquery.event.move',
    'jquery.event.swipe',
    'modernizr',
    'jquery-cookie',
    './services/index',
    './controllers/index',
    'dayPilot'
], function (ng) {
    'use strict';

    return ng.module('app', [ 'angularSpinner', 'uiRouterStyles', 'ui.router', 'ui.bootstrap', 'app.services', 'app.controllers', 'daypilot' ])
});
