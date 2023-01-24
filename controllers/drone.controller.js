const Drone = require('../models/Drone.model')

module.exports.list = (req, res, next) => {
    Drone.find()
    .then((drones) => {
        res.render('drones/list', { drones })
    })
    .catch(err => console.error(err))
}