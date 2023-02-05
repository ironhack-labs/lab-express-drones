const User = require('../models/User.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports.create = (req, res, next) => {
  res.render('users/new')
}

module.exports.doCreate = (req, res, next) => {
  User.create(req.body)
    .then(() => {
      res.redirect('/login')
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render('users/new', { errors: err.errors, user: req.body})
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res) => {
  res.render('users/login');
};

const sessions = {};

module.exports.doLogin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((ok) => {
          if (ok) {
            const sessionId = (Math.random() + 1).toString(36).substring(7);
            sessions[sessionId] = user.id;

            res.set("Set-Cookie", `sessionid=${sessionId}`);
            res.redirect('/')
          }
        })
        .catch(next);
    })
    .catch(next);
}