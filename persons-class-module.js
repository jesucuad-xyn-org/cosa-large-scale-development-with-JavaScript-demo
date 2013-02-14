"use strict";

var CustomerModule = {};
(function(Module) {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // zwar ein guter Anwendungsfall, aber vermischung von business logik und ui
    Person.prototype.alreadyPresent = function() {
        return this.$$hashKey !== undefined;
    };
    Module.Person = Person;
})(CustomerModule);

function CustomerCtrl($scope) {
    $scope.persons = [];

    $scope.save = function(person) {
        if (!person.alreadyPresent()) {
            $scope.persons.push(person);
        }
        $scope.initForm();
    }

    $scope.saveText = function(person) {
        return person.alreadyPresent() ? "Done" : "Save";
    }

    $scope.remove = function(person) {
        $scope.persons.splice($scope.persons.indexOf(person), 1);
        $scope.initForm();
    }

    $scope.edit = function(person) {
        $scope.person = person;
    }

    $scope.initForm = function() {
        $scope.person = new CustomerModule.Person();
        $scope.person.gender = "Female";
    }
    $scope.initForm();

}