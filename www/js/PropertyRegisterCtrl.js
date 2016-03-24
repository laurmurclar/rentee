angular.module('rentee.controllers')
  .controller('PropertyRegisterCtrl', function($scope, $auth) {
    $scope.handleRegBtnClick = function(form) {
      $auth.submitRegistration(
      {
        address:                form.address,
        rent:                   form.rent,
        n_baths:                form.n_baths,
        retn_allowance:         form.rent_allowance,
        ptrb:                   form.ptrb,
        n_beds:                 form.n_beds
      }, {
        config: 'property'
      })
        .then(function(resp) {
          // handle success response
          console.log("works");
        })
        .catch(function(resp) {
          // handle error response
          console.log("is poo");
        });
    };
  });