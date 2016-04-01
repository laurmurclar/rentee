angular.module('rentee.controllers')
    .controller('TenantLandlordProfileCtrl', function($scope, $auth, $stateParams, $http) {
      landlordID = $stateParams.num; // fix this to take in stateParams from the tenant id
      if (landlordID < 0)
        console.log("Error: num param not set correctly (value is less than 0)");

      $http.get('https://rentee-api.herokuapp.com/landlord/' + landlordID ).then( function successCallback(landlord){
        // do something with the reponse containing the landlord details
        // store landlord details and display on the thing
        var landlordTest = landlord;
        console.log("Success");
        console.log(landlordTest);
        window.localStorage['landlord'] = JSON.stringify(landlordTest);
        $scope.landlord = JSON.parse(window.localStorage['landlord'] || '{}');
      }, function errorCallback(response){
        console.log("Error in request for landlord details");
      });




    });
