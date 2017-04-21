'use strict';

angular.module('DroneCafe.CustomerMenuItem', [])

.component('customerMenuItem', {

  bindings: {
    user: '=',
    dish: '<'
  },

  controller: function(menuService, userService) {

    this.makeOrder = (dish) => {

      menuService.makeOrder(dish)
        .then(res => userService.getUser())
        .then(res => this.user = res.data)
        .catch(err => console.log(err));
    };

  },

  templateUrl: '/app/CustomerMenuItem/CustomerMenuItem.html',
});
