const Drone = require('../models/Drone.model');

module.exports.listDrones = (req, res, next) => {
  Drone.find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => next(err));
}
