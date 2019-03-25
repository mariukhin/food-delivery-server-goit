const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../modules/timestamp');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  telephone: String,
  nickName: String,
  location: String,
  password: String,
  email: String,
  favoriteProducts: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product'
  }],
  viewedProducts: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product'
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Order'
  }]
});

userSchema.plugin(timestamp);

const User = mongoose.model('User', userSchema);

module.exports = User;