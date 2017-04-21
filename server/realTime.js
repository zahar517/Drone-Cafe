'use strict';

const drone = require('netology-fake-drone-api');
const { UserDish } = require('./models');

exports.realTime = (server) => {
  const io = require('socket.io')(server);

  const delivery = (dishId, userId) => {
    return drone
      .deliver()
      .then(() => {
        return UserDish.findById(dishId)
          .then(dish => {
            dish.state = 5;
            return dish.save();
          })
          .then((dish) => {
            io.sockets.in(`user${userId}`).emit('changeState', dish);
            console.log('Доставлено');
            return dish;
          })
      })
      .catch(() => {
        return UserDish.findById(dishId)
          .then(dish => {
            dish.state = 4;
            return dish.save();
          })
          .then((dish) => {
            io.sockets.in(`user${userId}`).emit('changeState', dish);
            console.log('Возникли сложности');
            return dish;
          })
      });
  }

  return io.on('connection', socket => {

    socket.on('subscribe', function(room) {
      console.log('joining room', room);
      socket.join(room);
    });

    socket.on('send message to', function(data) {

      const { room, dish } = data;
      console.log('sending room post', room);

      io.sockets.in(room).emit('changeState', dish);

      if (dish.state === 3) {
        const { _id, _user } = dish;

        delivery(_id, _user)
          .then((dish) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => resolve(dish), 2*60*1000);
            })
          })
          .then((dish) => UserDish.remove({ _id }))
          .then((data) => {
            io.sockets.in(`user${_user}`).emit('changeState', data);
            console.log('Удалено');
          })
          .catch(err => console.log(err))

      }
    });

  });
};
