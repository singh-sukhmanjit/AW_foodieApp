var foodieApp = angular.module('foodieApp', []);
foodieApp.controller('mainController', function($scope){
  $scope.restaurants = ['Farzi Cafe', 'McDonals', 'Pizza Hut', 'KFC'];
});
