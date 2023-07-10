const Drone = require('../models/Drone.model');

module.exports.listDrones = (req, res, next) => {
  Drone.find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => next(err));
}

module.exports.getCreateForm = (req, res, next) => {
  res.render('drones/create-form');
}

module.exports.createDrone = (req, res, next) => {
  Drone.create(req.body)
    .then(droneDB => {
      res.redirect(`/drones/${droneDB._id}`)
    })
    .catch(err => next(err));
}