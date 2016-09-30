angular.module('arifu.dashboard').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('dashboard', {
    url: '/dashboard',
    views: {
      '': {
        controller:"dashboardCtrl",
        templateUrl: VIEW._modules('dashboard/dashboard.main')
      },
      'subjects@dashboard':{
        templateUrl: VIEW._modules('dashboard/dashboard.subjects')
      },
      'contents@dashboard':{
        templateUrl: VIEW._modules('dashboard/dashboard.contents')
      },
      'users@dashboard':{
        templateUrl: VIEW._modules('dashboard/dashboard.users')
      }
    }

  })
});
