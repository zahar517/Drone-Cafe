'use strict';

angular.module('DroneCafe').component('userLogin', {

  templateUrl: '/app/UserLogin/UserLogin.html',

  controller: function () {
    this.checkUser = newUser => newUser;
    this.title = 'Drone Cafe';
  }
});