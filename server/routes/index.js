'use strict'

const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.status(200).send('login'));

router.get('/register', (req, res) => res.status(200).send('register'));

module.exports = router;