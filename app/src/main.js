'use strict';
require('./login');
require('./home');
require('./dashboard');
require('./error');
require('./common');
require('./settings');

var states = require('./approutes.js');
var app = angular.module('myApp', ['ui.router', 'ngSanitize', 'myApp.home', 'myApp.login', 'myApp.dashboard', 'myApp.error', 'myApp.common','myApp.settings']);

angular.element(document).ready(function() {
  app.config(states)
    .run(['$rootScope', '$state', '$stateParams',
      function($rootScope, $state, $stateParams) {
        console.log($state)
          // It's very handy to add references to $state and $stateParams to the $rootScope
          // so that you can access them from any scope within your applications.For example,
          // <li ui-sref-active="active }"> will set the <li> // to active whenever
          // 'home.items' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]);

  //Handle the error-pages
  app.config(['$httpProvider',
    function($httpProvider) {
      // Authentication interceptor
        $httpProvider.interceptors.push(['$q', '$window','$rootScope',
        function($q,$window,$rootScope) {
          return {
            'responseError': function(rejection) {
              console.log(rejection);
              if (rejection.status === 401) {
                $window.location.href = '/';
              } else {
                $window.location.href='/#/error'
              }
              return $q.reject(rejection);
            },
            'request': function(config) {
              return config || $q.when(config);
            }
          };
        }
      ]);
      $httpProvider.defaults.headers.common.Accept = 'application/json';
      //initialize get if not there
      if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
      }

      //disable IE ajax request caching
      $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
      // extra
      $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
      $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }
  ]);
  angular.bootstrap(document, ['myApp']);
});
