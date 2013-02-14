"use strict";


module CustomerModule {
    class Person {
        public name: string;
        public age: number;
        public gender: string;
        private $$hashKey: string; // provided by angular, just declared here to make compiler happy :)

        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        public alreadyPresent(): bool {
            return this.$$hashKey !== undefined;
        }
    }

    export class Customer extends Person {
        private static sequence: number = 1;

        public static nextNumber(): number {
            return Customer.sequence++;
        }

        private id: number;

        constructor(name: string, age: number, gender: string) {
            super(name, age, gender);
            this.id = Customer.nextNumber();
        }
    }
}

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
        $scope.person = new CustomerModule.Customer(undefined, undefined, undefined);
        $scope.person.gender = "Female";
    }
    $scope.initForm();

}