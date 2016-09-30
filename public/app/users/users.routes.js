angular.module('arifu.users').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('users', {
    url: '/users',
    views: {
      '': {
        templateUrl: VIEW._modules('users/users.main')
      }
    }

  }).
  state('login', {
    url: '/login',
    views: {
      '': {
        controller: 'usersCtrl',
        templateUrl: VIEW._modules('users/users.login')
      }
    }
  })
});
