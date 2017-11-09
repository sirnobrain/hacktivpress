'use strict'

const mongoose = require('mongoose');
const User = require('./user');

mongoose.connect('mongodb://localhost/hacktivpress-sirnobrain', {useMongoClient: true}, err => {
  err ? console.log('Connection to database failed') : console.log('Connected to database');
});
mongoose.Promise = global.Promise

module.exports = { User }