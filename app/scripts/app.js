'use strict';

/**
 * @ngdoc overview
 * @name mvsUnfollowApp
 * @description
 * # mvsUnfollowApp
 *
 * Main module of the application.
 */
angular
  .module('mvsUnfollowApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run([
    '$rootScope',
    function($rootScope) {
      $rootScope.facebookAppId = '982947961730970';
    }
  ]);