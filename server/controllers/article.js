'use strict'

const models = require('./../models');
const genResp = require('./../helpers/gen-response');
const mongoose = require('mongoose');

class Article {
  static getAll(req, res) {
    models.Article.find().populate('author').exec()
    .then(articles => {
      const resp = genResp(200, 'get all articles', {articles}, null);
      res.status(resp.status).send(resp);
    })
    .catch(err => {
      const resp = genResp(500, 'failed to get articles', null, err);
      res.status(resp.status).send(resp);
    });
  }

  static getOne(req, res) {
    models.Article.findById(req.params.id).populate('author').exec()
    .then(article => {
      const resp = genResp(200, 'get article', { article }, null);
      res.status(resp.status).send(resp);
    })
    .catch (err => {
      const resp = genResp(500, 'failed to get article', null, err);
      res.status(resp.status).send(resp);
    });
  }

  static getByCategory(req, res) {
    models.Article.find({category: req.params.category}).populate('author').exec()
    .then(articles => {
      const resp = genResp(200, 'get article by category', { articles }, null);
      res.status(resp.status).send(resp);
    })
    .catch (err => {
      const resp = genResp(500, 'failed to get article', null, err);
      res.status(resp.status).send(resp);
    });
  }

  static getByAuthor(req, res) {
    models.User.findOne({username: req.params.author}).exec()
    .then(user => {
      if (!user) return Promise.reject('No author found');
      return models.Article.find({author: user._id}).populate('author').exec();
    })
    .then(articles => {
      const resp = genResp(200, 'get article by author', { articles }, null);
      res.status(resp.status).send(resp);
    })
    .catch (err => {
      const resp = genResp(500, 'failed to get article', null, err);
      res.status(resp.status).send(resp);
    });
  }

  static create(req, res) {
    let newArticle = req.body;
    newArticle.author = req.headers.user;

    models.Article.create(newArticle)
    .then(articleCreated => {
      const resp = genResp(200, 'create article', { articleCreated }, null);
      res.status(resp.status).send(resp);
    })
    .catch (err => {
      const resp = genResp(500, 'failed to create article', null, err);
      res.status(resp.status).send(resp);
    });
  }

  static update(req, res) {
    models.Article.findOne({_id: req.params.id}).exec()
    .then(article => {
      if (!article) return Promise.reject('No article found');
      if (String(article.author) !== req.headers.user._id) return Promise.reject('Unauthorized');

      return models.Article.updateOne({_id: req.params.id}, req.body).exec()
    })
    .then(updated => {
      if (updated.n === 0) return Promise.reject('No article found');
      const resp = genResp(200, 'update article', updated, null);
      res.status(resp.status).send(resp);
    })
    .catch (err => {
      const resp = genResp(500, 'failed to update article', null, err);
      res.status(resp.status).send(resp);
    });
  }

  static destroy(req, res) {
    models.Article.findOne({_id: req.params.id}).exec()
    .then(article => {
      if (!article) return Promise.reject('No article found');
      if (String(article.author) !== req.headers.user._id) return Promise.reject('Unauthorized');

      return models.Article.deleteOne({_id: req.params.id})
    })
    .then(deleted => {
      const resp = genResp(200, 'delete article', deleted, null);
      res.status(resp.status).send(resp);
    })
    .catch (err => {
      const resp = genResp(500, 'failed to delete article', null, err);
      res.status(resp.status).send(resp);
    });
  }
}

module.exports = Article;