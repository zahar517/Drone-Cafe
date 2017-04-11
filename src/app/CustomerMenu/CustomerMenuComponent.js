'use strict';

angular.module('DroneCafe.CustomerMenu', [])

.component('customerMenu', {

  templateUrl: '/app/CustomerMenu/CustomerMenu.html',

  controller: function () {
    this.title = 'Choose dish';

    this.dishes = [];
  }
});