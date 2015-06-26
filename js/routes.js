define([ './app' ], function (app) {
    'use strict';

    return app.config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeController',
                data: {
                    css: 'css/main.css'
                }
            })

            .state('todo', {
                url: '/todo',
                templateUrl: 'views/todo.html',
                controller: 'todoController',
                data: {
                    css: 'css/main.css'
                }
            })

            .state('todo.mainInitial', {
                url: '/mainInitial',
                views: {
                    'toolbarArea': { templateUrl: 'views/toolbar.html', controller: 'toolbarController' },
                    'calendarArea': { templateUrl: 'views/calendar.html', controller: 'calendarController' }
                },
                data: {
                    css: 'css/main.css'
                }
            });

    } ])
        .run([ '$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$on("$stateChangeSuccess", function (event, next, nextParams, current, currentParams) {
                next.data.previousState = {
                    name: current.name,
                    params: currentParams
                };
            });
        } ]);
})
