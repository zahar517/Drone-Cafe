'use strict';

angular.module('DroneCafe')
  .factory('userService', ($http, authService) => {

    return {
      getUser: function() {
        return $http.get(`/api/users/${authService.getUserId()}`);
      },
      updateUser: function(data) {
        return $http.put(`/api/users/${authService.getUserId()}`, data);
      },
    }
    
  });
