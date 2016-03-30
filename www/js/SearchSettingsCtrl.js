angular.module('rentee.controllers')
  .controller('SearchSettingsCtrl', function($scope, $stateParams, $http) {
      $scope.handleRegBtnClick = function(form){
      //form.rent_allowance = 'f'; 
      //form.ptrb = 'f'; 
      /*if(form.rent_allowance=='t')
      {
        form.rent_allowance='t';
      }
      if(form.ptrb='t')//??? wtf does this work?
      {
        form.ptrb='t';
      }*/
      $scope.tenant = JSON.parse(window.localStorage['user'] || '{}');
      $http({
        url: "https://rentee-api.herokuapp.com/property", 
        method: "GET",
        params: 
        {
          town:                form.town,
          county:                form.county, 
          rent:                   form.rent,
          n_beds:                 form.n_beds,
          n_baths:                form.n_baths,
          rent_allowance:         form.rent_allowance,
          ptrb:                   form.ptrb,
          t_id:                   $scope.tenant.id
        }
    }).then( function successCallback(response){
        // do something with the reponse containing the landlord details
        console.log("works");
      }, function errorCallback(response){
        console.log("Error in request for landlord details");
      });
  }
    });