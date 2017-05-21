var classApp = angular.module('classApp', []);

classApp.controller('classCtrl', function ($scope) {
	$scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  }  
});