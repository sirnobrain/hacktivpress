'use strict'

const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(next) {
  let user = this;

  bcrypt.hash(user.password, 8, function(err, hash) {
    if (err) throw err;
    user.password = hash;
    next();
  });
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);