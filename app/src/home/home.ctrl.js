'use strict';

angular.module('myApp.home',['myApp.common']).controller('HomeCtrl', ['$scope', '$state', '$q', 'LoginService', function($scope, $state, $q, LoginService) {
  var self = this;
  this.username = LoginService.username;
  this.menuList = [{
    "id": 1,
    "label": "CONTACTS"
  }, {
    "id": 2,
    "label": "CREATE"
  },{
    "id": 3,
    "label": "LOGOUT"
  }];
  this.menuItemClick = function(id) {
    switch (id) {
      case 1:
        {
          $state.go('home.contacts', {}, { reload: true });
        };
        break;
      case 2:
        {
          $state.go('home.create', {}, { reload: true })
        };
        break;
      case 3:
        {
          $state.go('login')
        };
        break;
      default:
        {}
    }
    // self.menuClick();
  };
  // this.menuClick = function() {
  //   if ($('#ext_menu-5').hasClass('mbr-navbar--open')) {
  //     $('#ext_menu-5').removeClass('mbr-navbar--open')
  //     $('#ext_menu-5').removeClass('mbr-added mbr-hamburger--open')
  //   } else {
  //     $('#ext_menu-5').addClass('mbr-navbar--open');
  //     $('#ext_menu-5').addClass('mbr-added mbr-hamburger--open');
  //   }
  // }
}]);
