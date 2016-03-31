angular.module('rentee.controllers')
  .controller('PropertyProfileCtrl', function($scope, $auth, $http) {

    $scope.search = JSON.parse(window.localStorage['searchResult']);

    if ($scope.search.rent_allowance == true) $scope.search.rent_allowance = 'yes';
    else if ($scope.search.rent_allowance == false) $scope.search.rent_allowance = 'no';

    if ($scope.search.ptrb == true) $scope.search.ptrb = 'yes';
    else if ($scope.search.ptrb == false) $scope.search.ptrb = 'no';

    var user = JSON.parse(window.localStorage['user']);
    $scope.sendReaction = function(isApproved){
      $http({
        url: 'https://rentee-api.herokuapp.com/approval',
        method: 'POST',
        params: {
          tenant_id:      user.id,
          property_id:    $scope.search.id,
          approved:       isApproved
        }
      }).then(function(resp) {
        alert("Sent approval");
      },function(errorResp){
        alert("Error with approval request");
      });
    };
  });
