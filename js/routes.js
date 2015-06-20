define(['./app'], function (app){
    'use strict';

    return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeController',
                data: {
                    css: 'css/main.css'
                }
            });

    }])
        .run(['$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$on("$stateChangeSuccess", function(event, next, nextParams, current, currentParams){
                next.data.previousState = {
                    name: current.name,
                    params: currentParams
                };
            });
        }]);
})