'use strict';

angular.module('DroneCafe')
  .factory('kitchenService', ($http) => {
    return {
      getOrder: function() {
        return $http.get('/api/order');
      },
      changeState: function(id, state) {
        return $http.put(`/api/order/${id}`, state);
      },
    }
    
  });
