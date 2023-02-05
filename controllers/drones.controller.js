const mongoose = require("mongoose");
const Drone = require('../models/Drone.model');

module.exports.list = (req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones })
    })
    .catch()
}

module.exports.create = (req, res, next) => {
  res.render('drones/create-form')
}

module.exports.doCreate = (req, res, next) => {
  Drone.create(req.body)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render('drones/create-form', { errors: err.errors, drone: req.body});
      } else {
        next(err)
      }
    })
};

