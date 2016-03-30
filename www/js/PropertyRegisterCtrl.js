angular.module('rentee.controllers')
  .controller('PropertyRegisterCtrl', function($scope, $stateParams, $http) {
    $scope.handleRegBtnClick = function(form) {
      $scope.landlord = JSON.parse(window.localStorage['user'] || '{}');
      $http({
        url: "https://rentee-api.herokuapp.com/property", 
        method: "POST",
        params: 
        {
          street:                 form.street,
          town:                   form.town,
          county:                 form.county, 
          rent:                   form.rent,
          n_beds:                 form.n_beds,
          n_baths:                form.n_baths,
          rent_allowance:         form.rent_allowance,
          ptrb:                   form.ptrb,
          landlord_id:            $scope.landlord.id,
          avail_beds:             form.avail_beds
      }
    }).then( function successCallback(response){
        // do something with the reponse containing the landlord details
        console.log("property register works");
      }, function errorCallback(response){
        console.log("property register no work");
      });
  }
    });