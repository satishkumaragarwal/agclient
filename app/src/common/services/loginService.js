'use strict';


angular.module('myApp.common').service('LoginService', ['$http', function($http) {
  
 var self = this;
  self.params = {};
  self.authenticateUser = function (username, password) {
    self.username = username;
    self.token = btoa(username+":"+password);
    $http.defaults.headers.common['Authorization'] = 'Basic ' + self.token;
  };
}]);
