define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('calendarController', ['$scope', '$state', '$timeout', 'eventService', 'dateService',
        function ($scope, $state, $timeout, eventService, dateService) {

            $scope.dateService = dateService;
            $scope.eventService = eventService;

            $scope.dayConfig = {
                scale: "Day",
                days: 8,
                startDate: $scope.dateService.today,

                eventClickHandling: "Select",
                onEventSelected: function(args) {
                    $scope.selectedEvents = $scope.dp.multiselect.events();
                    $scope.$apply();
                },
                timeHeaders: [
                    { groupBy: "Month" },
                    { groupBy: "Cell", format: "d" }
                ],
                resources: [
                    { name: "Room B", id: "B" },
                    { name: "Room C", id: "C" },
                    { name: "Room D", id: "D" },
                    { name: "Room E", id: "E" }
                ],
                onEventMove: function (args) {
                    var params = {
                        id: args.e.id(),
                        newStart: args.newStart.toString(),
                        newEnd: args.newEnd.toString()
                    };

                }
            };

        }]);
});