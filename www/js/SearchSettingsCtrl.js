angular.module('rentee.controllers')
  .controller('SearchSettingsCtrl', function($scope, $auth) {

    $scope.handleRegBtnClick = function(form) {
      //$scope.rent_allowance = 'false'; //to make default value of rent allowance false - needs to be tested
      //$scope.ptrb = 'false'; //to make default value of ptrb false - needs to be tested
      $auth.submitRegistration(
      {
        town:                form.town,
        county:                form.county, 
        rent:                   form.rent,
        n_beds:                 form.n_beds,
        n_baths:                form.n_baths,
        rent_allowance:         form.rent_allowance,
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