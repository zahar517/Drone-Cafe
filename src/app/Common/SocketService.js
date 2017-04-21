'use strict';

angular.module('DroneCafe')
  .factory('mySocket', (socketFactory) => {

    let myIoSocket = io.connect('/');

    let mySocket = socketFactory({
      ioSocket: myIoSocket
    });

    return mySocket;
  
  });