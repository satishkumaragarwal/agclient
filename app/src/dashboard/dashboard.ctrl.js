'use strict';


angular.module('myApp.dashboard')
.controller('DashboardCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http){
  var self = this;
  this.contentLoaded = false;
  $timeout(function () {
  	// just to show content is ready after network calls to be displayed
	  self.contentLoaded = true;
    }, 200);
  $http.get('http://localhost:49684/api/contacts')
  .success(function(data){
    self.Contacts = data;
  })
  .error(function(err){
    console.log(err);
  });

  self.remove = function(contact){
    $http.delete('http://localhost:49684/api/contacts/'+contact.ID)
    .success(function(data){
      self.Contacts.splice(self.Contacts.indexOf(contact),1);
    })
    .error(function(err){
      console.log(err);
    });
  }
}])