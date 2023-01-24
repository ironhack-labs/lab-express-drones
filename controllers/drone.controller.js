const Drone = require('../models/Drone.model')

module.exports.list = (req, res, next) => {
    Drone.find()
    .then((drones) => {
        res.render('drones/list', { drones })
    })
    .catch(err => console.error(err))
};

module.exports.create = (req, res, next) => {
    res.render('drones/create-form')
};

module.exports.doCreate = (req, res, next) => {
    Drone.create(req.body)
    .then((newDrone) => {
        res.redirect('/drones')
        console.info(`Drone ${newDrone.name} has been created`)
    })
    .catch(err => console.error(err))
};

module.exports.edit = (req, res, next) => {
    Drone.findById(req.params.id)
    .then(drone => {
        if (drone) {
            res.render('drones/update-form', { drone })
        } else {
            res.redirect('/drones')
        }
    })
    .catch(err => console.error(err))
};

module.exports.doEdit = (req, res, next) => {
    Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(drone => {
        res.redirect('/drones')
        console.info(`Drone ${drone.name} has been updated`)
    })
    .catch(err => console.error(err))
};