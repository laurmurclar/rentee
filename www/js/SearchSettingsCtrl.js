angular.module('rentee.controllers')
  .controller('SearchSettingsCtrl', function($scope, $stateParams, $http, $state) {
      $scope.handleRegBtnClick = function(form){

      if(form.rent_allowance== null)
      {
        form.rent_allowance='f';
      }
      if(form.ptrb== null)
      {
        form.ptrb='f';
      }

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
        var lastSearchResult = JSON.stringify(response.data);

        if (lastSearchResult == 'null'){
          console.log("was null");
          $state.go('no-property-results');
        } else {
          window.localStorage['searchResult'] = lastSearchResult;

          var userTemp = JSON.parse(window.localStorage['searchResult'] || '{}');
          console.log(JSON.stringify(userTemp));

          $state.go('property-profile');
        }

      }, function errorCallback(response){
        console.log("Error in search request");
      });
  }
    });
