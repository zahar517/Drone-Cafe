'use strict';

angular.module('DroneCafe.DishOrderedItem', [])

.component('dishOrderedItem', {

  bindings: {
    order: '=',
    dish: '<',
  },

  controller: function (kitchenService) {

    this.startCooking = (dish) => {

      const newState = { state: 2 };

      kitchenService.changeState(dish._id, newState)
        .then(data => kitchenService.getOrder())
        .then(res => this.order = res.data)
        .catch(err => console.log(err));

    };

  },

  templateUrl: '/app/DishOrderedItem/DishOrderedItem.html',

});
