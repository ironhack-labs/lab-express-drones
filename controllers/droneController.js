const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

module.exports.getDrones = (req, res, next) => {
    Drone.find().sort({ createdAt: 'desc' })
    .then(drones => {
        res.render('drones/list', { drones });
        
    })
    .catch(err => next(err))
}

module.exports.getDroneCreateForm = (req, res, next) => {
 res.render('drones/create-form');
}

module.exports.doDroneCreate = async(req, res, rext) => {
    try {
        const data = req.body
        const newCeleb = await Drone.create(data)
        console.log(data)
    } catch (error){
    console.log(error)
    }
}

