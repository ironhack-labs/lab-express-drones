const mongoose = require('mongoose')
const User = require('../models/user.model')

module.exports.create = (req, res, next) => {
  res.render('users/new')
}

module.exports.doCreate = (req, res, next) => {
  // console.log('doCreate controller required!')
  console.log(req.body)
  User.create(req.body)
    .then(() => {
      res.redirect('/login')
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('users/new', { errors: error.errors })
      }
      else {
        next(error)
      }
    })
}

module.exports.login = (req, res, next) => {
  res.render('users/login')
}