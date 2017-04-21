'use strict';

angular.module('DroneCafe.CustomerMenu', [])

.component('customerMenu', {

  bindings: {
    user: '=',
  },

  controller: function () {
    this.title = 'Choose dish';

    this.dishes = [];
  },

  templateUrl: '/app/CustomerMenu/CustomerMenu.html',

});
