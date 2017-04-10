'use strict';

angular.module('DroneCafe.OrderItem', [])

.component('orderItem', {

  bindings: {
    dish: '<'
  },

  templateUrl: '/app/OrderItem/OrderItem.html',
});
