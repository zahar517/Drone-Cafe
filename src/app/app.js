'use strict';

let DroneCafe = angular.module('DroneCafe', ['ui.router', 'ngMaterial', 'ngMessages']);

DroneCafe.config($stateProvider => {
  $stateProvider.
    state('home', {
      url: '',
      component: 'userLogin',
    })
});
