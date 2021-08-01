const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  username: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  address: {
    street: String,
    city: String,
    zipCode: String,
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
