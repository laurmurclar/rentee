angular.module('rentee.controllers')
  .controller('LandlordProfileCtrl', function($scope, $auth) {
    $http.get(config.BACKEND_URL + '').then(function(resp){
      $scope.tenant = resp.data;
    });
  });
