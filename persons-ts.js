var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
"use strict";
var CustomerModule;
(function (CustomerModule) {
    var Person = (function () {
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        Person.prototype.alreadyPresent = function () {
            return this.$$hashKey !== undefined;
        };
        return Person;
    })();    
    var Customer = (function (_super) {
        __extends(Customer, _super);
        function Customer(name, age, gender) {
                _super.call(this, name, age, gender);
            this.id = Customer.nextNumber();
        }
        Customer.sequence = 1;
        Customer.nextNumber = function nextNumber() {
            return Customer.sequence++;
        }
        return Customer;
    })(Person);
    CustomerModule.Customer = Customer;    
})(CustomerModule || (CustomerModule = {}));

function CustomerCtrl($scope) {
    $scope.persons = [];
    $scope.save = function (person) {
        if(!person.alreadyPresent()) {
            $scope.persons.push(person);
        }
        $scope.initForm();
    };
    $scope.saveText = function (person) {
        return person.alreadyPresent() ? "Done" : "Save";
    };
    $scope.remove = function (person) {
        $scope.persons.splice($scope.persons.indexOf(person), 1);
        $scope.initForm();
    };
    $scope.edit = function (person) {
        $scope.person = person;
    };
    $scope.initForm = function () {
        $scope.person = new CustomerModule.Customer(undefined, undefined, undefined);
        $scope.person.gender = "Female";
    };
    $scope.initForm();
}
//@ sourceMappingURL=persons-ts.js.map
