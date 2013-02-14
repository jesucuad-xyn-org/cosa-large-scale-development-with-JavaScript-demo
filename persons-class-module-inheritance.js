"use strict";

function __extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
}

function __mixin(child, parent) {
    for (var p in parent.prototype) {
        child.prototype[p] = parent.prototype[p];
    }
}

var AngularHelper = {};
(function(Module) {

    function AngularAware() {
    }

    AngularAware.prototype.alreadyPresent = function() {
        return this.$$hashKey !== undefined;
    };

    Module.AngularAware = AngularAware;
})(AngularHelper);

var CustomerModule = {};
(function(Module, Angular) {

    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    function Customer(name, age, gender) {
        // super
        Person.call(this, name, age, gender);
        Angular.AngularAware.call(this);
        this.id = Customer.nextNumber();
    }

    __extends(Customer, Person);
    __mixin(Customer, Angular.AngularAware);

    // static
    Customer.sequence = 1;
    Customer.nextNumber = function() {
        return Customer.sequence++;
    };

    // Person wird nicht exportiert
    Module.Customer = Customer;
})(CustomerModule, AngularHelper);

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
        $scope.person = new CustomerModule.Customer();
        $scope.person.gender = "Female";
    }
    $scope.initForm();

}