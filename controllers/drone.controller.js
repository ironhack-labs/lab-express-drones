const Drones = require('../models/Drone.model')

module.exports.showDrones = (req, res, next) => {
    Drones.find()
    .then((drones) => {
        res.render('list',{ drones : drones })
    }) 
    .catch(e => console.error(e))
}