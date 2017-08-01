'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('home', {
      url: '/home',
      controller: 'HomeCtrl',
      controllerAs: 'home',
      templateUrl: 'src/home/home.tpl.html'
    })
    .state('home.contacts', {
      url: '/contacts',
      controller: 'DashboardCtrl',
      controllerAs: 'dashboard',
      templateUrl: 'src/dashboard/dashboard.tpl.html'
    })
    .state('home.create', {
      url: '/create',
      controller: 'SettingsCtrl',
      controllerAs: 'settings',
      templateUrl: 'src/settings/settings.tpl.html'
    })
    .state('login', { // Login page
      url: '/login',
      controller: 'LoginCtrl',
      controllerAs: 'login',
      templateUrl: 'src/login/login.tpl.html',
    })
    .state('home.error', {
      url: '/error',
      controller: 'ErrorCtrl',
      controllerAs: 'error',
      templateUrl: 'src/error/error.tpl.html'
    });
    $urlRouterProvider.otherwise('/login');
}];
