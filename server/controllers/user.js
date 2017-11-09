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
      const resp = genResp(200, 'signed in', { jwtoken }, null);
      res.status(resp.status).send(resp);
    })
    .catch(err => {
      if (err === 'Wrong Password') {
        const resp = genResp(422, 'signin failed, wrong password', null, err);
        res.status(resp.status).send(resp);
      } else {
        const resp = genResp(500, 'signin failed', null, err);
        res.status(resp.status).send(resp);
      }
    });
  }

  static register(req, res) {}
}

module.exports = User;