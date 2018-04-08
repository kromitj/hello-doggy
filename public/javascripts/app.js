var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/partials/main.html',
        controller: 'mainController'
    })
    .when('/admin', {
        templateUrl: '/partials/admin/index.html',
        controller: 'mainController'
    })
})

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {    
    $scope.handle = '';
    $scope.characters = 5;   
}]);
