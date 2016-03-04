angular.module('rentee.controllers')
  .controller('TenantProfileCtrl', function($scope, $auth) {

    $scope.tenant = JSON.parse(window.localStorage['user'] || '{}');
  });
