// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('rentee', ['ionic', 'rentee.controllers', 'ng-token-auth'])
  .config(function($authProvider) {
    $authProvider.configure([{
      tenant: {
        apiUrl: 'https://rentee-api.herokuapp.com',
        emailSignInPath:       '/t_auth/sign_in',
        emailRegistrationPath: '/t_auth'
      }
    },{
      landlord: {
        apiUrl: 'https://rentee-api.herokuapp.com',
        emailSignInPath:       '/l_auth/sign_in',
        emailRegistrationPath: '/l_auth'
      }
    }]);
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.constant('config', {
  BACKEND_URL: 'https://rentee-api.herokuapp.com'
})
.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function($scope, $el) {
            $rootScope.hideTabs = true;
            $scope.$on('$destroy', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
})
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider.state('landlord-profile', {
    url: '/landlord-profile',
    controller: 'LandlordProfileCtrl',
    templateUrl: 'templates/landlord-profile.html'
  })
  .state('landlord-register', {
    url: '/landlord-register',
    controller: 'LandlordRegisterCtrl',
    templateUrl: 'templates/landlord-register.html'
  })
  .state('login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'templates/login.html'
  })
  .state('no-property-results', {
    url: '/no-property-results',
    templateUrl: 'templates/no-property-results.html'
  })
  .state('property-profile', {
    url: '/property-profile',
    controller: 'PropertyProfileCtrl',
    templateUrl: 'templates/property-profile.html'
  })
  .state('property-register', {
    url: '/property-register',
    controller: 'PropertyRegisterCtrl',
    templateUrl: 'templates/property-register.html'
  })
  .state('register-choice', {
    url: '/register-choice',
    templateUrl: 'templates/register-choice.html'
  })
  .state('search-settings', {
    url: '/search-settings',
    controller: 'SearchSettingsCtrl',
    templateUrl: 'templates/search-settings.html'
  })
  .state('success', {
    url: '/success',
    templateUrl: 'templates/success.html'
  })
  .state('tenant-landlord-profile', {
    url: '/tenant-landlord-profile',
    controller: 'TenantLandlordProfileCtrl',
    templateUrl: 'templates/tenant-landlord-profile.html',
    params: {
      num: -1
    }
  })
  .state('tenant-matches', {
    url: '/tenant-matches',
    controller: 'TenantMatchesCtrl',
    templateUrl: 'templates/tenant-matches.html',
    params: {
      num: -1  //default value is -1
    }
  })
  .state('tenant-profile', {
    url: '/tenant-profile',
    controller: 'TenantProfileCtrl',
    templateUrl: 'templates/tenant-profile.html'
  })
  .state('tenant-register', {
    url: '/tenant-register',
    controller: 'TenantRegisterCtrl',
    templateUrl: 'templates/tenant-register.html'
  })

  .state('tenant', {
    url: '/tenant',
    cache: false,
    abstract: true,
    templateUrl: "templates/tenant.html"
  })
  .state('tenant.profile', {
    url: '/profile',
      views: {
        'profile-tab': {
          templateUrl: 'templates/tenant-profile.html'
        }
      }
  })
  .state('tenant.search', {
    url: '/search',
      views: {
        'search-tab': {
          templateUrl: 'templates/search-settings.html',
          controller: 'SearchSettingsCtrl'
        }
      }
  })
  .state('tenant.no-property-results', {
    url: '/no-property-results',
      views: {
        'search-tab': {
          templateUrl: 'templates/no-property-results.html'
        }
      }
  })
  .state('tenant.matches', {
    url: '/matches',
    cache: false,
      views: {
        'matches-tab': {
          templateUrl: 'templates/tenant-matches.html',
          controller: 'TenantMatchesCtrl',
          params: {
            num: -1  //default value is -1
          }
        }
      }
  })
  .state('tenant.property-profile', {
    url: '/property-profile',
      views: {
        'search-tab': {
          templateUrl: 'templates/property-profile.html',
          controller: 'PropertyProfileCtrl'
        }
      }
  })
  .state('tenant.landlord-profile', {
    url: '/landlord-profile',
      views: {
        'matches-tab': {
          templateUrl: 'templates/tenant-landlord-profile.html',
          controller: 'TenantLandlordProfileCtrl',
        }
      },
      params: {
        num: -1
      }
  })
});

angular.module('rentee.controllers', []);
