'use strict'

const express = require('express');
const controllers = require('./../controllers');
const isLoggedIn = require('./../middlewares/is-logged-in');

const router = express.Router();

router.get('/', controllers.Article.getAll);

router.get('/:id', controllers.Article.getOne);

router.get('/category/:category', controllers.Article.getByCategory)

router.get('/author/:author', controllers.Article.getByAuthor)

router.post('/', isLoggedIn, controllers.Article.create)

router.put('/:id', isLoggedIn, controllers.Article.update)

router.delete('/:id', isLoggedIn, controllers.Article.destroy)

module.exports = router;