'use strict';

angular.module('DroneCafe.CustomerMenu', [])

.component('customerMenu', {

  bindings: {
    user: '=',
  },

  controller: function (menuService) {
    this.title = 'Choose dish';

    menuService.getMenu()
      .then(res => this.menu = res.data)
      .catch(err => console.log(err));

  },

  templateUrl: '/app/CustomerMenu/CustomerMenu.html',

});
