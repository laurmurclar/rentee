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
      .then(function(resp) {
        // handle success response
        var user = resp.data;
        // store response using local storage
        window.localStorage['user'] = JSON.stringify(user);
        $state.go('tenant-profile');

      })
      .catch(function(resp) {
        // handle error response
        console.log("No");
      });
    };
  });
