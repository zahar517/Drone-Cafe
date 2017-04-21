'use strict';

angular.module('DroneCafe.Client', [])

.component('client', {

  bindings: {
    user: '<',
  },

  templateUrl: '/app/Client/Client.html',

  controller: function () {
    this.order = [];
  }
});
