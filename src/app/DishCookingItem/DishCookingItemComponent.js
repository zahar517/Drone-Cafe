'use strict';

angular.module('DroneCafe.DishCookingItem', [])

.component('dishCookingItem', {

  bindings: {
    order: '=',
    dish: '<',
  },

  controller: function (kitchenService) {

    this.endCooking = (dish) => {

      const newState = { state: 3 };

      kitchenService.changeState(dish._id, newState)
        .then(data => kitchenService.getOrder())
        .then(res => this.order = res.data)
        .catch(err => console.log(err));

    };

  },

  templateUrl: '/app/DishCookingItem/DishCookingItem.html',

});