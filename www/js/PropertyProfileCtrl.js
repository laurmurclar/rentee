angular.module('rentee.controllers')
  .controller('PropertyProfileCtrl', function($scope, $auth) {

    $scope.search = JSON.parse(window.localStorage['searchResult']);

    if ($scope.search.rent_allowance == true) $scope.search.rent_allowance = 'yes';
    else if ($scope.search.rent_allowance == false) $scope.search.rent_allowance = 'no';

    if ($scope.search.ptrb == true) $scope.search.ptrb = 'yes';
    else if ($scope.search.ptrb == false) $scope.search.ptrb = 'no';

  });
