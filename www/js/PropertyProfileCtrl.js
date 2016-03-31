angular.module('rentee.controllers')
  .controller('PropertyProfileCtrl', function($scope, $auth, $http, $state) {
    // Setup the page with the most recent search result
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
        repeatSearch();
      },function(errorResp){
        alert("Error with approval request");
      });
    };

      var repeatSearch = function() {
        var form = JSON.parse(window.localStorage['searchForm']);
        var tenant = JSON.parse(window.localStorage['user']);

        $http({
          url: "https://rentee-api.herokuapp.com/property",
          method: "GET",
          params:
          {
            town:                   form.town,
            county:                 form.county,
            rent:                   form.rent,
            n_beds:                 form.n_beds,
            n_baths:                form.n_baths,
            rent_allowance:         form.rent_allowance,
            ptrb:                   form.ptrb,
            t_id:                   tenant.id
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

              $scope.search = JSON.parse(window.localStorage['searchResult']);
              $state.go('property-profile');
            }
        }, function errorCallback(response){
          console.log("Error in search request");
        });
    };
  });
