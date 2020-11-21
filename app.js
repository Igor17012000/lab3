(function () {
    'use strict';

    angular.module('lab3', [])
        .controller('controller', controller);

    controller.$inject = ['$scope'];

    function controller($scope) {
        $scope.result = "";
        $scope.list = "";

        $scope.setResult = function () {
              let products = $scope.list.split(',');
            for (let i = products.length - 1; i >= 0; i--) {
                if (products[i].trim() === "") products.splice(i, 1);
            }
            if (products.length === 0) {
                $scope.result ="Будь ласка, уведіть дані!";
            } else if (products.length <= 3) {
               $scope.result = "На здоров'я!";
            } else {
               $scope.result = "Це забагато!";
            }
        }
    }
})();