'use strict';

angular.module('myApp.login',['myApp.common']).controller('LoginCtrl', ['$scope', '$state', 'LoginService', function ($scope, $state, LoginService) {
  var self = this;
  this.user = {
  	'username' : 'test@test.com',
  	'pwd' : 'test'
  }
  this.submit = function() {
    LoginService.authenticateUser(this.user.username, this.user.pwd);
    $state.go('home');
  };
}]);
