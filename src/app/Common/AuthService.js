'use strict';

angular.module('DroneCafe')
  .factory('authService', ($http) => {

    let _userId = undefined;

    return {
      setUserId: function(userId) {
        _userId = userId;
      },
      getUserId: function() {
        return _userId;
      },
      login: function(newUser) {
        return $http.post('/login', newUser);
      },
    }
    
  });
