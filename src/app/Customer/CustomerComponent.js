'use strict';

angular.module('DroneCafe.Customer', [])

.component('customer', {

  templateUrl: '/app/Customer/Customer.html',

  controller: function () {
    this.title = 'Profile';

    this.username = '';
    this.balance = 0;

    this.addMoney = () => {};
  }
});