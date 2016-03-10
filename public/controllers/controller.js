var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    person1 = {
      name: 'Tim',
      email: 'a@b.com',
      number: '123-345-5678'
    };
    person2 = {
      name: 'Pim',
      email: 'a@b.com',
      number: '123-345-5678'
    };
    person3 = {
      name: 'Dim',
      email: 'a@b.com',
      number: '123-345-5678'
    };
    var contactlist = [person1, person2, person3];
    $scope.contactlist = contactlist;
}]);﻿
