'use strict';

angular.module('myApp.error').controller('ErrorCtrl', ['$scope','$state', function($scope, $state) {
  var self = this;
  var response = localStorage.getItem('error');
  $scope.status = '404' // not to be set as default
  if(response){
    response = JSON.parse(response);
    $('.modal-backdrop').css("display","none")
    $scope.status = response.status;
    if(response.status===-1){
      $scope.statusText ='You appear to be offline!';
    }else if(response.status===403){
      $scope.statusText ='Access forbidden';
    }else if(response.status===404){
      $scope.statusText = 'Page Not Found';
    }else if(response.status===500){
      $scope.statusText === 'Internal server error!'
    }else {
      $scope.statusText=== 'Ooops! Something went worng while processing request'
    }
  }
}]);
