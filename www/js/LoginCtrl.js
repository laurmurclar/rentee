angular.module('rentee.controllers')
  .controller('LoginCtrl', function($scope, $auth) {

    $scope.handleLoginBtnClick = function(form, choice) {
      console.log("Yes");

      $auth.submitLogin({
        email:                 form.email,
        password:              form.password
      },{
        config: choice
      })
      .then(function(resp) {
        // handle success response
        console.log("Yes");
      })
      .catch(function(resp) {
        // handle error response
        console.log("No");
      });
    };
  });
