const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unqiue: true,
  },
  landmark: {
    type: String,
    require: true
  },
  area: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  pincode: {
    type: Number,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  address: {
    type: String,

  },
  phonenumber: {
    type: Number,
    unique: true,
    reqire: true

  },

}, { timestamps: true })


module.exports = mongoose.model('user', userSchema) //creation of user model
