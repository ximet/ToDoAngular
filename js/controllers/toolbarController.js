define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('toolbarController', ['$scope', '$state', '$timeout', 'dateService',
        function ($scope, $state, $timeout, dateService) {

            $scope.dateService = dateService;
            $scope.toggleElement = true;

            $scope.add = function() {
                if($scope.formTodoText != undefined && $scope.formTodoText != '') {
                    if(localStorage.length != 0) {
                        $scope.dateService.currentEvents = JSON.parse(localStorage.getItem('events'));
                    }
                    $scope.dateService.currentEvents.push(
                        {
                            start: new DayPilot.Date($scope.dateService.currentDay),
                            end: new DayPilot.Date($scope.dateService.currentDay),
                            id: DayPilot.guid(),
                            text: $scope.formTodoText
                        }
                    );
                    localStorage.setItem('events', JSON.stringify($scope.dateService.currentEvents));
                    $scope.dateService.isChangeStorage = true;

                }
                $scope.formTodoText = '';
            };
        }]);
});
