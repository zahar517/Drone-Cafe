'use strict';

angular.module('DroneCafe.DishCookingItem', [])

.component('dishCookingItem', {

  bindings: {
    order: '=',
    dish: '<',
  },

  controller: function () {

    this.endCooking = (dish) => {};

  },

  templateUrl: '/app/DishCookingItem/DishCookingItem.html',

});