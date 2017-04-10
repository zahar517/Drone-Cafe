'use strict';

angular.module('DroneCafe', ['ui.router', 'ngMaterial', 'ngMessages', 'DroneCafe.UserLogin', 'DroneCafe.Customer'])

.config($stateProvider => {
  $stateProvider
    .state('home', {
      url: '',
      component: 'userLogin',
    })
});
