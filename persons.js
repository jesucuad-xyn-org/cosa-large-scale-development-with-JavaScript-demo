"use strict";

function CustomerCtrl($scope) {
    $scope.persons = [];

    $scope.save = function(person) {
        var alreadyPresent = $scope.persons.some(function (p) {
            return p.$$hashKey === person.$$hashKey;
        });
        if (!alreadyPresent) {
            $scope.persons.push(person);
        }
        $scope.initForm();
    }

    $scope.remove = function(person) {
        $scope.persons.splice($scope.persons.indexOf(person), 1);
        $scope.initForm();
    }

    $scope.edit = function(person) {
        $scope.person = person;
    }

    $scope.initForm = function() {
        $scope.person = {};
        $scope.person.gender = "Female";
    }
    $scope.initForm();

}