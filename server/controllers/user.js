'use strict'

const models = require('./../models');
const genToken = require('./../helpers/gen-token');
const genResp = require('./../helpers/gen-response');

class User {
  static login(req, res) {
    let signinUser = null;

    models.User.findOne({username: req.body.username}).exec()
    .then(user => {
      if (!user) return Promise.reject('User Not Found');
      signinUser = user;
      return user.comparePassword(req.body.password);
    })
    .then(isMatch => {
      const jwtoken = genToken(signinUser);
      const resp = genResp(200, 'logged in', { jwtoken }, null);
      res.status(resp.status).send(resp);
    })
    .catch(err => {
      if (err === 'Wrong Password' || err === 'User Not Found') {
        const resp = genResp(422, 'login failed', null, err);
        res.status(resp.status).send(resp);
      } else {
        const resp = genResp(500, 'login failed', null, err);
        res.status(resp.status).send(resp);
      }
    });
  }

  static register(req, res) {
    models.User.create({username: req.body.username, password: req.body.password})
    .then(createdUser => {
      console.log('C', createdUser)
      const jwtoken = genToken(createdUser);    
      const resp = genResp(200, 'registered', { user: createdUser, jwtoken: jwtoken }, null);
      res.status(resp.status).send(resp);
    })
    .catch(err => {
      const resp = genResp(500, 'register failed', null, err);
      res.status(resp.status).send(resp);
    });
  }
}

module.exports = User;