'use strict';

angular.module('DroneCafe.Order', [])

.component('order', {

  bindings: {
    order: '<'
  },

  controller: function () {
    
    this.title = 'Order';

    this.chooseDish = () => {};
  },

  templateUrl: '/app/Order/Order.html',

});