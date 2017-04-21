'use strict';

angular.module('DroneCafe')
  .factory('menuService', ($http, authService) => {

    return {
      getMenu: function() {
        return $http.get('/api/menu');
      },
      getOrder: function() {
        return $http.get(`/api/order?_user=${authService.getUserId()}`);
      },
      makeOrder: function(dish) {
        let data = { _user: authService.getUserId(), _dish: dish._id }
        return $http.post('/api/order', data);
      },
    }
    
  });
