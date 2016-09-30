/**
 * @ngdoc app ClientApp
 * @name ClientApp
 * @requires ui.router
 * @requires restangular
 * @requires smart-table
 * @requires chart.js
 * @requires textAngular
 * @requires angularMoment
 * @requires ui.bootstrap
 * @requires slick
 * @requires mgo-angular-wizard
 */

var app = angular.module("layg", [
  'ui.router',
  'restangular',
  'smart-table',
  'chart.js',
  'textAngular',
  'angularMoment',
  'ui.bootstrap',
  'highcharts-ng',
  'slick',
  'mgo-angular-wizard',
  'permission',
  'LocalStorageModule',
  'angularValidator',
  'angular-loading-bar',
  'angular.filter',
  'angular-timeline',
  'angular-scroll-animate'
]);

/**
 * @ngdoc       factory
 * @description Listening and Diverting channel messages
 * @name        socket
 * @param       socketFactory {factory}
 * @memberof    Client
 * @example
 * app.factory('SOCKET_NAME', function (socketFactory) {
 * var myIoSocket = io.connect('YOUR IP ADDRESS');
 * //Instance of the socket
 * socket = socketFactory({
 *   ioSocket: myIoSocket
 * });
 * //Return the socket variable
 * return socket;
 * @returns     {object} socket
 });
 */
// app.factory('socket', function(socketFactory) {
//   var myIoSocket = io.connect('localhost');
//
//   socket = socketFactory({
//     ioSocket: myIoSocket
//   });
//   // socket = socketFactory;
//   return socket;
// });

/**
 * @ngdoc run
 * @name Main
 * @requires $http
 * @requires $rootScope
 * @memberof ClientApp
 */
app.run(['$http', '$rootScope', '$state', function($http, rootScope,
  state) {
  rootScope.date = new Date();
  rootScope.title = 'LAYG';
  rootScope.messages = [];
  rootScope.menu = [];
  rootScope.errors = [];
  rootScope.state = state;
}]);
