'use strict';

angular.module('DroneCafe.CustomerMenuItem', [])

.component('customerMenuItem', {

  bindings: {
    user: '=',
    dish: '<'
  },

  controller: function(menuService, userService, authService, mySocket) {

    this.makeOrder = (dish) => {

      menuService.makeOrder(dish)
        .then(res => userService.getUser())
        .then(res => this.user = res.data)
        .then(() => {

          mySocket.emit('send message to', {
            room: `user${authService.getUserId()}`,
            dish,
          });

          mySocket.emit('send message to', {
            room: 'kitchen',
            dish,
          });

        })
        .catch(err => console.log(err));
    };

  },

  templateUrl: '/app/CustomerMenuItem/CustomerMenuItem.html',
});
