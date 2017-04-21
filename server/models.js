const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  balance: { type: Number, default: 100 },
});

const dishSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const userDishSchema = mongoose.Schema({
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  _dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
  state: { type: Number, default: 1 },
});

const User = mongoose.model('User', userSchema);
const Dish = mongoose.model('Dish', dishSchema);
const UserDish = mongoose.model('UserDish', userDishSchema);

module.exports = { User, Dish, UserDish };