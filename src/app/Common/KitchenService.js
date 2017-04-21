'use strict';

angular.module('DroneCafe')
  .factory('kitchenService', ($http) => {
    return {
      getOrder: function() {
        return $http.get('/api/order');
      },
    }
    
  });
