var diligencias = angular.module('diligencias', []);

diligencias.controller('orders', function ($scope, $http) {
  $scope.is_active = false;
  $scope.activeButton = function() {
    $scope.is_active = !$scope.is_active;
  } 
  $scope.order_by = 'diligencia_type';
  $scope.orderBy = function(type){
    $scope.order_by = type;
  };
  
  $http({
    method: 'GET',
    url: 'https://api.diligeiro.com.br/v2/diligencias/public'
  }).then(function successCallback(response) {
    $scope.diligencias = response.data.results;
    for(var i = 0; i <= $scope.diligencias.length; i++ ){
      $scope.diligencias[i].city = $scope.diligencias[i].city.replace(", " , " - "); 
    };
  }, function errorCallback(response) {
    console.log(response);
  });
});

