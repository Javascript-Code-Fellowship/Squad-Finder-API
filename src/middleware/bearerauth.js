'use strict';

const { users } = require('..models/user.js');

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) { _authError() }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.model.authenticateToken(token);

    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    _authError();
  }

  function _authError() {
    res.status(403).send('Login Failed')
  }
} 