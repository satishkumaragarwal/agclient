'use strict';

angular.module('myApp.settings').controller('SettingsCtrl', ['$scope','$timeout', '$http', function($scope,$timeout,$http) {
  var self = this;
  this.contentLoaded = false;
  $timeout(function () {
  	// just to show content is ready after network calls to be displayed
	  self.contentLoaded = true;
  }, 200);

  this.update = function(user){
    $http.post('http://localhost:49684/api/contacts', JSON.stringify(user))
    .success(function(data){
      alert("Contacts saved!");
      self.user = {};
    })
    .error(function(err){
      console.log(err);
    });
  }

}]);
