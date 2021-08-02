const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    require: true,
    min: 2,
    max: 35,
  },
  lastname: {
    type: String,
    require: true,
    min: 2,
    max: 35,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    min: 8,
    max: 255,
  },
  username: {
    type: String,
    unique: true,
    require: true,
    min: 2,
    max: 35,
  },
  password: {
    type: String,
    require: true,
    min: 8,
    max: 255,
  },
  phoneNumber: {
    type: Number,
    require: true,
    min: 3,
    max: 26,
  },
  address: {
    street: {
      type: String,
      min: 2,
      max: 30,
    },
    city: {
      type: String,
      min: 2,
      max: 30,
    },
    zipCode: {
      type: String,
      min: 2,
      max: 30,
    },
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
},
{
  collection: 'user',
});

module.exports = mongoose.model('user', userSchema);
