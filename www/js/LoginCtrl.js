angular.module('rentee.controllers')
  .controller('LoginCtrl', function($scope, $auth, $state) {

    $scope.handleLoginBtnClick = function(form, choice) {
      //console.log("Yes");

      $auth.submitLogin({
        email:                 form.email,
        password:              form.password
      },{
        config: choice
      })
      .then(function(sign_in) {
        // handle success response
        var user = sign_in;
        // store response using local storage
        window.localStorage['user'] = JSON.stringify(user);

        var userTemp = JSON.parse(window.localStorage['user'] || '{}');
        console.log(JSON.stringify(userTemp));

        var configName = userTemp['configName'];
        console.log(configName);

        if (userTemp.configName === "tenant") $state.go('tenant.profile');
        else if (userTemp.configName === "landlord") $state.go('landlord-profile');
      })
      .catch(function(sign_in) {
        // handle error response
        alert("Invalid credentials");
      });
    };
  });
