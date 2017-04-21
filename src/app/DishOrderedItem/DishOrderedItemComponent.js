'use strict';

angular.module('DroneCafe.DishOrderedItem', [])

.component('dishOrderedItem', {

  bindings: {
    order: '=',
    dish: '<',
  },

  controller: function (kitchenService, mySocket) {

    this.startCooking = (dish) => {

      const newState = { state: 2 };

      dish.state = newState.state;

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

  templateUrl: '/app/DishOrderedItem/DishOrderedItem.html',

});
