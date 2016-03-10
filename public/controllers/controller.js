var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    // this part is for getting data from server - data in database
    $http.get('/contactlist_d').success(function(response){
      console.log("I got the data I requested");

      $scope.contactlist_d = response;
    });
    // end part

    // this part is for getting data from server - data in server.js
    $http.get('/contactlist').success(function(response){
      console.log("I got the data I requested");

      $scope.contactlist_s = response;
    });
    // end part

    // this part is used to show data from controller in index.html
    person1 = {
      name: 'Cat',
      email: 'a@b.com',
      number: '123-345-5678'
    };
    person2 = {
      name: 'Cole',
      email: 'a@b.com',
      number: '123-345-5678'
    };
    person3 = {
      name: 'Cassidy',
      email: 'a@b.com',
      number: '123-345-5678'
    };
    var contactlist = [person1, person2, person3];
    // $scope makes it posible to use this variable in view (ex. index.html)
    $scope.contactlist_c = contactlist;
}]);﻿
