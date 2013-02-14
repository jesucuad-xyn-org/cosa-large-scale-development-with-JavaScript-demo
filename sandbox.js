"use strict";

function CustomerCtrl($scope) {
    $scope.persons = [];

    $scope.save = function(person) {
        $scope.persons.push(person);
    }
}