'use strict';

angular.module('DroneCafe.CustomerMenuItem', [])

.component('customerMenuItem', {

  bindings: {
    dish: '<'
  },

  controller: function() {

    this.balance = 0;

    this.makeOrder = () => {};

  },

  templateUrl: '/app/CustomerMenuItem/CustomerMenuItem.html',
});
