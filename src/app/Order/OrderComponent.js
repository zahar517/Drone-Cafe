'use strict';

angular.module('DroneCafe.Order', [])

.component('order', {

  bindings: {
    order: '<'
  },

  controller: function () {
    
    this.title = 'Order';

    this.addDish = () => {};
  },

  templateUrl: '/app/Order/Order.html',

});