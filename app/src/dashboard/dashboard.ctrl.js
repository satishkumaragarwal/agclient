'use strict';


angular.module('myApp.dashboard').controller('DashboardCtrl', ['$scope', '$timeout', function($scope, $timeout){
  var self = this;
  this.contentLoaded = false;
  $timeout(function () {
  	// just to show content is ready after network calls to be displayed
	  self.contentLoaded = true;
    }, 200);
}])