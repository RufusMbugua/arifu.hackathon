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
;// I control the main demo.
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
;/**
 * @ngdoc directive
 * @name isActiveNav
 * @param $location
 * @memberof ClientApp
 */
app.directive('isActiveNav', ['$location', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.parent().addClass('active');
        } else {
          element.parent().removeClass('active');
        }
      });
    }
  };
}]);

/**
 * @ngdoc directive
 * @name isActiveLink
 * @param $location
 * @memberof ClientApp
 */
app.directive('isActiveLink', ['$location', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      });
    }
  };
}]);
;app.directive('pushMenu', ['$rootScope', '$timeout', function(rootScope,
  timeout) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      init();
      var main = $('#main');
      $('.menu-btn').click(function() {
        toggle();
      })

      function init() {
        element.addClass('menu');
        hide();
      }

      function show() {
        element.removeClass('menu-hidden');
        $('#main').addClass('pushed');
        $('#main').css({
          'left': 200
        });

        $('#main').append('<div class="overlay"></div>')
        var overlay = $('#main.pushed .overlay');
        overlay.click(function() {
          hide();
        })
      }

      function hide() {
        element.addClass('menu-hidden');
        $('#main').css({
          'left': 0
        });
        $('#main').removeClass('pushed');
        $('.overlay').remove();
      }

      function toggle() {
        if (element.hasClass('menu-hidden')) {
          show();
        } else {
          hide();
        }
      }
      rootScope.$watch('parent', function() {
        hide();
      })
    }
  };
}]);
;app.directive('rmValidate', ['$rootScope', '$timeout', function(rootScope,
  timeout) {
  return {
    restrict: 'A',
    require: "^form",
    link: function(scope, element, attrs, form) {
      var message = element.attr('data-message')
      var name = element.attr('name');
      var form_name = form.$name
      var rm_class = "{'has-error':" + form_name + "." + name +
        ".$invalid}";
      element.attr('ng-class', rm_class);
      var inline_error = $.parseHTML("<p></p>");
      $(inline_error).attr('class', 'inline-error');
      $(inline_error).attr('ng-show', form_name + "." + name +
        ".$invalid");
      $(inline_error).text(message);
      element.parent().append(inline_error);
    }
  };
}]);
;/**
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
;app.factory('senChart', ['$rootScope', function(rootScope) {
  var senChart = {};

  senChart.plot = function plot(series, type) {
    var chartConfig = {

      options: {
        //This is the Main Highcharts chart config. Any Highchart options are valid here.
        //will be overriden by values specified below.
        chart: {
          type: type
        },
        tooltip: {
          style: {
            padding: 10,
            fontWeight: 'bold'
          }
        }
      },
      //The below properties are watched separately for changes.

      //Series object (optional) - a list of series using normal Highcharts series options.
      series: series,
      //Title configuration (optional)
      title: {
        text: ''
      },
      //Boolean to control showing loading status on chart (optional)
      //Could be a string if you want to show specific loading text.
      loading: false,
      //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
      //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
      xAxis: {
        title: {
          text: ''
        },
        labels: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
      useHighStocks: false,
      credits: {
        enabled: false
      },
      //function (optional)
      func: function(chart) {
        //setup some logic for the chart
      },
      size: {
        height: 200
      }
    };
    return chartConfig;
  }

  return senChart;
}])
;app.factory('errorInterceptor', ['$q', '$log', '$rootScope', '$timeout',
  '$injector',
  function(q, log, rootScope, timeout, injector) {
    rootScope.error = null;
    return {
      // optional method
      'requestError': function(rejection) {
        // do something on error
        if (canRecover(rejection)) {
          return responseOrNewPromise
        }
        return $q.reject(rejection);
      },
      // optional method
      'response': function(response) {
        if (response.data.success) {
          var success = {
            "icon": "ion-check",
            "type": "success",
            "code": response.status,
            "msg": response.statusText,
            "message": response.data.success.message
          };
          rootScope.success = success;
          console.log(rootScope.success);
          rootScope.showSuccess = true;
          timeout(function() {
            rootScope.showSuccess = false;
          }, 2000);
        }
        return response;
      },


      // optional method
      'responseError': function(response) {
        console.log(response);
        if (response.data) {
          var error = {
            "icon": "ion-android-alert",
            "type": "danger",
            "code": response.status,
            "msg": response.statusText,
            "message": response.data.error.message
          };
          rootScope.error = error;
          rootScope.showError = true;
          timeout(function() {
            rootScope.showError = false;
          }, 3000);

          // do something on error
          var stateService = injector.get('$state');
          if (response.status == 401) {
            timeout(function() {
              stateService.go('login');
            }, 3000)
          }
        }
        return q.reject(response);
      }
    }
  }
]);

app.config(['$httpProvider', function(httpProvider) {
  httpProvider.interceptors.push('errorInterceptor');
}]);
;app.factory('senFilter', ['$rootScope', '$filter', function(rootScope, filter) {
  var senFilter = {};
  // Group By Filter
  senFilter.groupBy = filter('groupBy');
  // Order by Filter
  senFilter.orderBy = filter('orderBy');

  senFilter.cleanDates = function cleanDates(data) {
    angular.forEach(data, function(value, key) {
      if (typeof value.created_at !== 'undefined') {
        value.created_at = moment(value.created_at).format(
          'DD-MM-YYYY');
      }
    })
    return data;
  }
  return senFilter;
}]);
;app.factory('Requests', ['$http', '$rootScope', function(http, rootScope) {
  var Requests = {};
  Requests.data = [];
  Requests.post_data = []
  var base_url = "api/";
  var url = null;

  /**
   * Post Data
   * @param  {[type]} resource [description]
   * @param  {[type]} object   [description]
   * @return {[type]}          [description]
   */
  Requests.post = function post(resource, object, callBack) {
    var request_url = '';
    if (object.top_level) {
      request_url = resource;
    } else {
      request_url = base_url + resource;
    }
    var req = {
      method: 'POST',
      url: request_url,
      data: object
    };

    /**
     * Check if Post Data exists
     * @param  {[type]} object [description]
     * @return {[type]}        [description]
     */

    if (object) {
      http(req)
        .success(function(data) {
          //this is the key
          callBack(data);
        })
        .error(function(data, response) {
          console.log(response + " " + data);
        });;
    }
  }

  /**
   * @description Put Data
   * @param resource
   * @param object
   * @param callBack
   */
  Requests.put = function put(resource, object, callBack) {

    var req = {
      method: 'PUT',
      url: base_url + resource,
      data: object
    };

    /**
     * Check if Post Data exists
     * @param  {[type]} object [description]
     * @return {[type]}        [description]
     */
    if (object) {
      http(req)
        .success(function(data) {
          //this is the key
          callBack(data);
        })
        .error(function(data, response) {
          console.log(response + " " + data);
        });;
    }
  }

  Requests.destroy = function destroy(resource, object, callBack) {

    var req = {
      method: 'DELETE',
      url: base_url + resource,
      data: object
    };

    /**
     * Check if Post Data exists
     * @param  {[type]} object [description]
     * @return {[type]}        [description]
     */
    if (object) {
      http(req)
        .success(function(data) {
          //this is the key
          callBack(data);
        })
        .error(function(data, response) {
          console.log(response + " " + data);
        });;
    }
  }


  /**
   * [get description]
   * @return {[type]} [description]
   */
  Requests.get = function get(resource, object, callBack) {
    var req;
    var request_url = '';
    if (object.top_level) {
      request_url = resource;
      delete(object.top_level);
    } else {
      request_url = base_url + resource;
    }
    req = {
      method: 'GET',
      url: request_url,
      headers: {
        'Content-Type': 'application/json'
      },
      params: object
    };

    http(req)
      .success(function(data) {
        //this is the key
        callBack(data);
      })
      .error(function(data, response) {
        console.log(response + " " + data);
      });;
  }
  return Requests;
}])
;angular.module('templates-dist', ['../public/app/partials/public/banner.html', '../public/app/partials/public/footer.html', '../public/app/partials/public/header.html', '../public/app/partials/public/index.html']);

angular.module("../public/app/partials/public/banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/banner.html",
    "<div class=\"banner\">\n" +
    "  <div class=\"row\" style=\"background:white;border-radius:3px;margin-top:4em;padding:10px;margin:0\">\n" +
    "    <div class=\"col-md-6 col-md-offset-3\" >\n" +
    "      <h4 style=\"text-align:center\">Welcome to LAYG</h4>\n" +
    "      <p>\n" +
    "        Not sure what to say, so I'll put a bunch of logos. You'll figure out the rest. 🤓\n" +
    "      </br>\n" +
    "      In case of anything, contact me <a href=\"mailto:mbuguarufus@gmail.com\">here</a>.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6 col-md-offset-3\">\n" +
    "    <a class=\"col-md-3\" href=\"http://www.laravel.com\">\n" +
    "      <img src=\"https://worldvectorlogo.com/logos/laravel.svg\" style=\"display:inline-block;width:100px;margin:0 auto\">\n" +
    "    </a>\n" +
    "    <a class=\"col-md-3\" href=\"https://angularjs.org/\">\n" +
    "      <img src=\"http://code-maven.com/img/angularjs.png\" style=\"display:inline-block;width:100px;margin:0 auto\"?>\n" +
    "    </a>\n" +
    "\n" +
    "\n" +
    "    <a class=\"col-md-3\" href=\"http://yeoman.io/\">\n" +
    "      <img src=\"http://blog.teamtreehouse.com/wp-content/uploads/2014/01/yeoman-logo.png\" style=\"display:inline-block;width:100px;margin:0 auto\" >\n" +
    "    </a>\n" +
    "\n" +
    "    <a class=\"col-md-3\" href=\"http://gruntjs.com/\">\n" +
    "      <img src=\"https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667\" style=\"display:inline-block;width:100px;margin:0 auto\" >\n" +
    "    </a>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/footer.html",
    "<nav>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-email\"></i>  Contact Us\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        Follow Us\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-twitter\"></i></a>\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-facebook\"></i>\n" +
    "        </a>\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-googleplus\"></i>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</nav>");
}]);

angular.module("../public/app/partials/public/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/header.html",
    "<nav id=\"main\" class=\"header\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand\" href=\"#\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "    </div>\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/public/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"banner\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "");
}]);
