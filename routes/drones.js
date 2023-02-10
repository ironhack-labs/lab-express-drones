const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

require('../models/Drone.model')

router.get('/drones', (req, res, next) => {

  DroneModel
    .find()
    .then((data) => {
      res.render('drones/list', { data })
    })
    .catch(err => console.log(err))

});

router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form')

});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  DroneModel
    .create({ name, propellers, maxSpeed })
    .then(drone => res.redirect('/drones'))
    .catch(err => console.log(err))

});

router.get('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params

  DroneModel
    .findById(id)
    .then(data => {
      res.render('drones/update-form', data)
    })
    .catch(err => console.log(err))

});

router.post('/drones/:id/edit', (req, res, next) => {

  const { name, propellers, maxSpeed, drone_id } = req.body

  DroneModel
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(drone => res.redirect('/drones'))
    .catch(err => console.log(err))

});

router.post('/drones/:id/delete', (req, res, next) => {

  const { id } = req.params

  DroneModel
    .findByIdAndRemove(id)
    .then(drone => res.redirect('/drones'))
    .catch(err => console.log(err))

});

module.exports = router;
