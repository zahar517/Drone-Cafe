'use strict';

angular.module('DroneCafe.UserLogin', [])

.component('userLogin', {

  controller: function ($state, authService) {

    this.newUser = null;

    this.checkUser = newUser => {
      authService.login(newUser)
        .then(res => {
          console.log(res);
          $state.go('client');
          authService.setUserId(res.data._id);
        })
        .catch(error => console.log(error));
    };
    
    this.title = 'Drone Cafe';
  },

  templateUrl: '/app/UserLogin/UserLogin.html',

});