'use strict';

angular.module('DroneCafe.Client', [])

.component('client', {

  bindings: {
    user: '<',
    order: '<',
  },

  controller: function (authService, mySocket, menuService) {

    mySocket.emit('subscribe', `user${authService.getUserId()}`)

    mySocket.on('changeState', (data) => {
      console.log('Changed state ', data);      
      menuService.getOrder()
        .then(res => this.order = res.data)
        .catch(err => console.log(err));
    });

  },

  templateUrl: '/app/Client/Client.html',

});
