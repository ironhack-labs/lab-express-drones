const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const mongoose = require("mongoose");

module.exports.create = (req, res) => {
  res.render("users/new");
};

module.exports.doCreate = (req, res, next) => {
  User.create(req.body)
    .then(() => {
      res.redirect("/login");
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render("users/new", { errors: err.errors, user: req.body });
      } else {
        next(err);
      }
    });
};