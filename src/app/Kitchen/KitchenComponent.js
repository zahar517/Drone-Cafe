'use strict';

angular.module('DroneCafe.Kitchen', [])

.component('kitchen', {

  bindings: {
    order: '<'
  },

  controller: function (mySocket, kitchenService) {
  
    mySocket.emit('subscribe', 'kitchen')

    mySocket.on('changeState', (data) => {
      console.log('Changed state ', data);
      kitchenService.getOrder()
        .then(res => this.order = res.data)
        .catch(err => console.log(err))
    });

  },

  templateUrl: '/app/Kitchen/Kitchen.html',

});
