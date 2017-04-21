'use strict';

angular.module('DroneCafe.Customer', [])

.component('customer', {

  bindings: {
    user: '='
  },

  controller: function () {
    this.title = 'Profile';

    this.addMoney = () => {};
  },

  templateUrl: '/app/Customer/Customer.html',

});