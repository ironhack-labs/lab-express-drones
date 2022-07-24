const createError = require('http-errors');
const { model } = require('mongoose');

const Drone = require('../models/Drone.model');

// Index
module.exports.home = (req, res, next) => {
    res.render('home');
}

// Read
module.exports.list = (req, res, next) => {
    Drone.find()
        .then((drones) => {
            res.render('drones/list', { drones });
        })
        .catch(next)
};

module.exports.details = (req, res, next) => {
    const { id } = req.params;
    Drone.findById(id)
        .then((drone) => {
            res.render('drones/details', { drone });
        })
        .catch((err) => {
            console.error(err);
        })
};

// Create
module.exports.create = (req, res, next) => {
    res.render('drones/form');
}

module.exports.doCreate = (req, res, next) => {
    Drone.create(req.body)
        .then((createDrone) => {
            console.log(createDrone);
            res.redirect('/drones');
        })
        .catch((err) => {
            next(err);
        })
}

// Update
module.exports.edit = (req, res, next) => {
    const { id } = req.params;
    Drone.findById(id)
        .then((drone) => {
            console.log(drone)
            res.render('drones/update', { drone })
        })
}

module.exports.doEdit = (req, res, next) => {
    const { id } = req.params;
    Drone.findByIdAndUpdate(id, req.body, { new: true })
        .then((drone) => {
            console.log(drone);
            res.redirect(`/drones/${drone.id}`);
        })
}

// Delete
module.exports.delete = (req, res, next) => {
    const { id } = req.params;
    Drone.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/drones')
        })
        .catch(next)
}