define([ './module' ], function (controllers) {
    'use strict';

    controllers.controller('homeController', [ '$scope', '$state', '$timeout',
        function ($scope, $state, $timeout) {

            $scope.onToDoClick = function () {
                $state.go('todo.mainInitial');
            }
        } ]);
});
