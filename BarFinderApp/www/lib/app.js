﻿// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('App', ['ionic']);


App.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

App.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('page3', {
          url: '',
          templateUrl: 'page3.html'
      })

      .state('page4', {
          url: '/page4',
          templateUrl: 'page4.html'
      })
    ;

    // if none of the above states are matched, use this as the fallback

    $urlRouterProvider.otherwise('');


})

  
App.controller('MyCtrl', [$scope,$log, MyCtrl]); 


function MyCtrl($scope, $log) {
    $scope.sendMood() = function() {
        alert("SENT DATA!");
    }
}