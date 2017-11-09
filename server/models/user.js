'use strict'

const uniqueValidator = require('mongoose-unique-validator');
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

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);