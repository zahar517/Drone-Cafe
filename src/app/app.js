'use strict';

angular.module('DroneCafe', ['ui.router', 'ngMaterial', 'ngMessages', 'DroneCafe.UserLogin'])

.config($stateProvider => {
  $stateProvider.
    state('home', {
      url: '',
      component: 'userLogin',
    })
});
