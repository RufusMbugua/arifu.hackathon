// I control the main demo.
angular.module('arifu.dashboard',[]).controller("dashboardCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope','Requests',
  function(scope, filter, timeout, state, Restangular, $http, rootScope,Requests) {

    scope.subjects=[];
    scope.users=[];
    scope.contents=[];
    get_subjects();
    get_contents();
      get_users();


    function get_subjects(){
      var payload={};

      Requests.get('subjects',payload,function(data){
        if(data){
          scope.subjects = data;
        }
      })
    }

    function get_contents(){
      var payload={};

      Requests.get('contents',payload,function(data){
        if(data){
          scope.contents = data;
        }
      })
    }

    function get_users(){
      var payload={};

      Requests.get('users',payload,function(data){
        if(data){
          scope.users = data;
        }
      })
    }

  }
]);
