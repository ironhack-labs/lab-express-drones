const Drone = require('../models/drone.model')

module.exports.list = ((req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones })
    })
    .catch((error) => console.error('An error occurred trying to list drones', error))
})