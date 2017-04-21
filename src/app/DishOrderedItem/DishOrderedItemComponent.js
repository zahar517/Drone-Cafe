'use strict';

angular.module('DroneCafe.DishOrderedItem', [])

.component('dishOrderedItem', {

  bindings: {
    order: '=',
    dish: '<',
  },

  controller: function () {

    this.startCooking = (dish) => {}

  },

  templateUrl: '/app/DishOrderedItem/DishOrderedItem.html',

});
