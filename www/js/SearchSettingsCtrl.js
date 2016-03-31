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
          var lastSearchResult = JSON.stringify(response.data);

          if (lastSearchResult == 'null'){
            // There was no properties which matched the criteria
            $state.go('no-property-results');
          }
          else {
            // Save the most recent search criteria (for reuse) and the result (for displaying on next screen)
            window.localStorage['searchResult'] = lastSearchResult;
            window.localStorage['searchForm'] = JSON.stringify(form);

            $state.go('property-profile');
          }

        }, function errorCallback(response){
          console.log("Error in search request");
      });
  }
    });
