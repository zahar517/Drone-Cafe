'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const apiUser = require('./server/apiUser');
const apiMenu = require('./server/apiMenu');
const apiOrder = require('./server/apiOrder');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const { Dish, User, UserDish } = require('./server/models');
const dbURI = 'mongodb://localhost:27017/dronecafe';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbURI);

app.disable('x-powered-by');
app.use(express.static(__dirname + '/src'));
app.use('/api', apiUser);
app.use('/api', apiMenu);
app.use('/api', apiOrder);

const menuLoader = require('./server/menuLoader');

menuLoader.loadMenu()
  .then(dishes => console.log('Import menu success'))
  .catch(err => console.log('Error with menu import:', err));

app.post('/login', (req, res) => {
  const { name, email } = req.body;
  console.log('Try login with: ', req.body);

  User.findOne({ email })
    .then(user => {
      if (user) return user;

      user = new User({ name, email })

      return user.save();
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => res.sendStatus(500));
});

app.all('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
    console.log(err);
    if (!res.headersSent) res.sendStatus(404);
});

io.on('connection', socket => {

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

server.listen(PORT, () => console.log('listening port ' + PORT));

mongoose.connection.on('connected', () => console.log('Mongoose default connection open to ' + dbURI));

mongoose.connection.on('error', err => console.log('Mongoose default connection error: ' + err));

mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));

process.on('SIGINT', () => {  
  mongoose.connection.close(() => { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});
