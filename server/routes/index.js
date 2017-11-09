'use strict'

const express = require('express');
const controllers = require('./../controllers');

const router = express.Router();

router.post('/login', controllers.User.login);

router.get('/register', (req, res) => res.status(200).send('register'));

module.exports = router;