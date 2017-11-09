'use strict'

const express = require('express');
const controllers = require('./../controllers');

const router = express.Router();

router.post('/login', controllers.User.login);

router.post('/register', controllers.User.register);

module.exports = router;