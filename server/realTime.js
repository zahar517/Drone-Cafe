'use strict';

exports.realTime = (server) => {
  const io = require('socket.io')(server);

  return io.on('connection', socket => {

    socket.on('subscribe', function(room) {
      console.log('joining room', room);
      socket.join(room);
    });

    socket.on('send message to', function(data) {

      const { room, dish } = data;
      console.log('sending room post', room);

      io.sockets.in(room).emit('changeState', dish);
    });

  });
};
