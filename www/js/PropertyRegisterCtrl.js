angular.module('rentee.controllers')
  .controller('PropertyRegisterCtrl', function($scope, $auth) {
    $scope.handleRegBtnClick = function(form) {
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
          ptrb:                   form.ptrb
      }
    }).then( function successCallback(response){
        // do something with the reponse containing the landlord details
        console.log("property register works");
      }, function errorCallback(response){
        console.log("property register no work");
      });
  }
    });