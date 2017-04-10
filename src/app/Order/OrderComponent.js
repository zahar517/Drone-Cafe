'use strict';

angular.module('DroneCafe.Order', [])

.component('order', {

  templateUrl: '/app/Order/Order.html',

  controller: function () {
    this.title = 'Order';

    this.order = [];

    this.addDish = () => {};
  }
});