'use strict'

const jwt = require('jsonwebtoken');
const genResp = require('./../helpers/gen-response');

module.exports = (req, res, next) => {
  if (req.headers.jwtoken) {
    jwt.verify(req.headers.jwtoken, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        const resp = genResp(422, 'token error', null, err);
        res.status(resp.status).send(resp);
      } else {
        req.headers.user = user;
        next();
      }
    });
  } else {
    const resp = genResp(422, 'have not signed up/signed in', null, 'Authentication error');
    res.status(resp.status).send(resp);
  }
};