// I control the main demo.
angular.module('arifu.dashboard',[]).controller("dashboardCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {

    scope.subjects=[];

  }
]);
