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

    function Customer(config) {
        // super
        Person.call(this, config.name, parseInt(config.age), config.gender);
        Angular.AngularAware.call(this);
        this.id = config.id || Customer.nextNumber();
    }

    __extends(Customer, Person);
    __mixin(Customer, Angular.AngularAware);

    // static
    Customer.sequence = 0;
    Customer.nextNumber = function() {
        return ++Customer.sequence;
    };

    // Person wird nicht exportiert
    Module.Customer = Customer;
})(CustomerModule, AngularHelper);


var CustomerApp = angular.module('CustomerApp', ['ngResource']);
CustomerApp.factory('customerResource', function($resource) {
    var server = 'https://rest-demo-server.appspot.com'; // app engine server
//    var server = ''; // this file served from same server
//    var server = 'http://localhost\\:8888'; // local server, this without web server
    var customerResource = $resource(server+'/customer/:id/:name/:age/:gender');
    return customerResource;
});

function CustomerCtrl($scope, customerResource) {
    $scope.persons = [];

    $scope.load = function() {
        customerResource.query({}, function(persons) {
            $scope.persons = persons.sort(function(a, b) {
                return a.id - b.id;
            }).map(function(personConfig) {
                    return new CustomerModule.Customer(personConfig);
                });
            persons.forEach(function(person) {
                if (person.id > CustomerModule.Customer.sequence) {
                    CustomerModule.Customer.sequence = person.id;
                }
            });
            $scope.initForm();
        });
    }

    $scope.save = function(person) {
        if (!person.alreadyPresent()) {
            $scope.persons.push(person);
        }
        customerResource.save(person);
        $scope.initForm();
    }

    $scope.saveText = function(person) {
        return (person && person.alreadyPresent()) ? "Done" : "Save";
    }

    $scope.remove = function(person) {
        $scope.persons.splice($scope.persons.indexOf(person), 1);
        customerResource.remove({id: person.id});
        $scope.initForm();
    }

    $scope.edit = function(person) {
        $scope.person = person;
    }

    $scope.initForm = function() {
        $scope.person = new CustomerModule.Customer({});
        $scope.person.gender = "Female";
    }

    $scope.load();

}