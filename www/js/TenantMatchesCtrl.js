angular.module('rentee.controllers')
    .controller('TenantMatchesCtrl', function($scope, $auth, $stateParams, $http) {
      var user = JSON.parse(window.localStorage['user']);
      var tenantID = user.id; // fix this to take in stateParams from the tenant id
      console.log(tenantID);
      if (tenantID < 0)
        console.log("Error: num param not set correctly (value is less than 0)");

      $http.get('https://rentee-api.herokuapp.com/matches?tenant_id=' + tenantID ).then(function successCallback(matches){
        //  + tenantID ).then(function successCallback(matches){
        // do something with the reponse containing the landlord details
        // put the matches into an array/list for the tenant matches
        // with landlord-id do another req for the landlord: showing the name
        var matchesTest = matches;
        console.log("Success");
        // store response using local storage
        console.log(matchesTest);
        window.localStorage['matches'] = JSON.stringify(matchesTest);
        $scope.matches = JSON.parse(window.localStorage['matches'] || '{}');

      }, function errorCallback(response){
        console.log("Error in request for landlord details");
      });




    });
