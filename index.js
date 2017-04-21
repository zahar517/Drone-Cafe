'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = require('http').createServer(app);

const dbURI = 'mongodb://localhost:27017/dronecafe';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbURI);

app.disable('x-powered-by');
app.use(express.static(__dirname + '/src'));

app.all('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
    console.log(err);
    if (!res.headersSent) res.sendStatus(404);
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
