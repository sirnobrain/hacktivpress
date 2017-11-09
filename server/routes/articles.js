'use strict'

const express = require('express');
const controllers = require('./../controllers');

const router = express.Router();

router.get('/', (req, res) => res.send('ok'));

router.get('/:id', (req, res) => res.send('ok'));

router.get('/category/:category', (req, res) => res.send('ok'))

router.get('/author/:author', (req, res) => res.send('ok'))

router.post('/', (req, res) => res.send('ok'))

router.put('/:id', (req, res) => res.send('ok'))

router.delete('/:id', (req, res) => res.send('ok'))

module.exports = router;