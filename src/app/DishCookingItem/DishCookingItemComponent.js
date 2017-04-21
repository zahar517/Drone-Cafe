'use strict';

angular.module('DroneCafe.DishCookingItem', [])

.component('dishCookingItem', {

  bindings: {
    order: '=',
    dish: '<',
  },

  controller: function (kitchenService, mySocket) {

    this.endCooking = (dish) => {

      const newState = { state: 3 };

      kitchenService.changeState(dish._id, newState)
        .then(data => {

          mySocket.emit('send message to', {
            room: `user${dish._user}`,
            dish,
          });

          return kitchenService.getOrder()
        })
        .then(res => this.order = res.data)
        .catch(err => console.log(err));

    };

  },

  templateUrl: '/app/DishCookingItem/DishCookingItem.html',

});