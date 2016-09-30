var PATH = {
  _modules:'app/',
  _globals:'app/'
}

var VIEW ={
  _modules:function(path){
    return PATH._modules+path+'.tpl.html'
  },
  _globals:function(path){
    return PATH._globals+path+'.tpl.html'
  }
}

angular.module("arifu", [
  'ui.router',
  'restangular',
  'smart-table',
  'textAngular',
  'angularMoment',
  'ui.bootstrap',
  'highcharts-ng',
  'slick',
  'mgo-angular-wizard',
  'permission',
  'LocalStorageModule',
  'angularValidator',
  'btford.socket-io',
  'angular-loading-bar',
  'arifu.users',
  'arifu.dashboard'
]);


/**
 * @ngdoc run
 * @name Main
 * @requires $http
 * @requires $rootScope
 * @memberof ClientApp
 */
angular.module("arifu").run(['$http', '$rootScope', '$state', function($http,
  rootScope,
  state) {
  rootScope.date = new Date();
  rootScope.title = 'Arifu Hack App';
  rootScope.messages = [];
  rootScope.menu = [];
  rootScope.errors = [];
  rootScope.state = state;
}]);

angular.module("arifu").controller('appCtrl', ['$location', function(
  $location) {
}]);
