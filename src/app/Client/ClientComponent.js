'use strict';

angular.module('DroneCafe.Client', [])

.component('client', {

  bindings: {
    user: '<',
    order: '<',
  },

  templateUrl: '/app/Client/Client.html',

  controller: function () {}
});
