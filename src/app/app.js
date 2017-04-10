'use strict';

angular.module('DroneCafe', [
  'ui.router',
  'ngMaterial', 
  'ngMessages', 
  'DroneCafe.UserLogin', 
  'DroneCafe.Customer',
  'DroneCafe.Order',
  ])

.config($stateProvider => {
  $stateProvider
    .state('home', {
      url: '',
      component: 'userLogin',
    })
});
