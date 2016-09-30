/**
 * @ngdoc config
 * @name mainRouteConfig
 * @memberof ClientApp
 * @param $stateProvider {service}
 * @param $urlRouterProvider {service}
 */
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/public");
    /**
     * @ngdoc state
     * @name public
     * @memberof ClientApp
     * @description Publicly Accessible Route
     */
    $stateProvider.state('public', {
      url: '/public',
      views: {
        '': {
          controller: 'publicCtrl',
          templateUrl: 'app/partials/public/index.html',
        },
        'header@public': {
          templateUrl: 'app/partials/public/header.html',
        },
        'banner@public': {
          templateUrl: 'app/partials/public/banner.html',
        },
        'footer@public': {
          templateUrl: 'app/partials/public/footer.html',
        }
      }
    });
});
