'use strict';

angular.module('DroneCafe', [
  'ui.router',
  'ngMaterial', 
  'ngMessages', 
  'DroneCafe.UserLogin', 
  'DroneCafe.Customer',
  'DroneCafe.Order',
  'DroneCafe.OrderItem',
  'DroneCafe.CustomerMenu',
  'DroneCafe.CustomerMenuItem',
  ])

.config($stateProvider => {
  $stateProvider
    .state('home', {
      url: '',
      component: 'userLogin',
    })
});
