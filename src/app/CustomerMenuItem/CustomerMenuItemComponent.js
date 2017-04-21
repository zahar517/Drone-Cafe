'use strict';

angular.module('DroneCafe.CustomerMenuItem', [])

.component('customerMenuItem', {

  bindings: {
    user: '=',
    dish: '<'
  },

  controller: function() {

    this.makeOrder = (dish) => {};

  },

  templateUrl: '/app/CustomerMenuItem/CustomerMenuItem.html',
});
