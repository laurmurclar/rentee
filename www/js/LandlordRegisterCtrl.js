angular.module('rentee.controllers')
  .controller('LandlordRegisterCtrl', function($scope, $auth, $state) {
    $scope.handleRegBtnClick = function(form) {
      $auth.submitRegistration(
      {
        f_name:                 form.f_name,
        l_name:                 form.l_name,
        email:                  form.email,
        ph_no:                  form.ph_no,
        password:               form.password,
        password_confirmation:  form.password_confirmation
      }, {
        config: 'landlord'
      })
        .then(function(resp) {
          // handle success response
          $state.go('success');
        })
        .catch(function(resp) {
          // handle error response
          alert("Invalid entry");
        });
    };
  });
