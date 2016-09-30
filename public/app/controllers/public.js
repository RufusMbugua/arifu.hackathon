// I control the main demo.
app.controller("publicCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {

    scope.items = [{
        'image': 'images/slide_1.jpg'
      }, {
        'image': 'images/slide_2.jpg'
      },
      // {
      //   'title': 'When to use Kescrow?',
      //   // 'description': 'When buying or selling high value items<p></p>' +
      //   //   'When buying or selling items that require shipping or delivery<p></p>' +
      //   //   'When dealing with questionable parties<p></p>' +
      //   //   'Where there is a delay between payment and the provision of services, e.g. construction<p></p>' +
      //   //   'Where there is a delay in the transfer of an item, e.g. registration of a vehicle<p></p>' +
      //   //   'Whenever there is a risk of fraud<p></p>' +
      //   //   'Whenever you feel nervous about a transaction'
      // }
    ];
  }
]);
