angular.module('arifu.dashboard').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('dashboard', {
    url: '/dashboard',
    views: {
      '': {
        templateUrl: VIEW._modules('dashboard/dashboard.main')
      }
    }

  })
});
