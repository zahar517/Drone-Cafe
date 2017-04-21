'use strict';

angular.module('DroneCafe.Customer', [])

.component('customer', {

  bindings: {
    user: '='
  },

  controller: function (userService) {
    this.title = 'Profile';

    let data = { balance: 100 };

    this.addMoney = () => {
      userService.updateUser(data)
        .then(res => this.user = res.data)
        .catch(err => console.log(err));
    };
  },

  templateUrl: '/app/Customer/Customer.html',

});