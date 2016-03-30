angular.module('rentee.controllers')
  .controller('TenantRegisterCtrl', function($scope, $auth, $state) {
    $scope.handleRegBtnClick = function(form) {
      $auth.submitRegistration(
      {
        f_name:                 form.f_name,
        l_name:                 form.l_name,
        email:                  form.email,
        password:               form.password,
        password_confirmation:  form.password_confirmation
      }, {
        config: 'tenant'
      })
        .then(function(resp) {
          // handle success response
          $state.go('success');
        })
        .catch(function(resp) {
          // handle error response
          console.log("nay");
        });
    };
  });
