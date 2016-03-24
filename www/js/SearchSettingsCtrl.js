angular.module('rentee.controllers')
  .controller('SearchSettingsCtrl', function($scope, $auth) {
    $scope.handleRegBtnClick = function(form) {
      $auth.submitRegistration(
      {
        town:                form.town,
        county:                form.county, 
        rent:                   form.rent,
        n_baths:                form.n_baths,
        n_beds:                 form.n_beds,
        retn_allowance:         form.rent_allowance,
        ptrb:                   form.ptrb
      }, {
        config: 'search'
      })
        .then(function(resp) {
          // handle success response
          console.log("work wok wok");
        })
        .catch(function(resp) {
          // handle error response
          console.log("no working");
        });
    };
  });