'use strict';

angular.module('DroneCafe.Client', [])

.component('client', {

  templateUrl: '/app/Client/Client.html',

  controller: function () {
    this.user = null;
    this.order = [];
  }
});
