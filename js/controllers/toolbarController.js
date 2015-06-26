define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('toolbarController', ['$scope', '$state', '$timeout', 'eventService', 'dateService',
        function ($scope, $state, $timeout, eventService, dateService) {
            $scope.eventService = eventService;
            $scope.dateService = dateService;
            $scope.toggleElement = true;

            $scope.add = function() {
                if($scope.formTodoText != undefined && $scope.formTodoText != '') {
                    if(localStorage.length != 0) {
                        $scope.eventService.currentEvents = JSON.parse(localStorage.getItem('events'));
                    }
                    $scope.eventService.pushEvents($scope.dateService.currentDay, $scope.dateService.currentDay, $scope.formTodoText)
                    localStorage.setItem('events', JSON.stringify($scope.eventService.currentEvents));
                    $scope.eventService.isChangeStorage = true;
                }
                $scope.formTodoText = '';
            };
        }]);
});
