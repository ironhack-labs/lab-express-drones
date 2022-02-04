const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(drone => {
      res.render('drones/list', { drone })
    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  Drone
    .create(req.body)
    .then(() => res.redirect('/drones'))
    .catch(err => res.render('drones/create-form'))
});

router.get('/drones/edit/:drone_id', (req, res, next) => {
  const { drone_id } = req.params
  Drone
    .findById(drone_id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))

});

router.post('/drones/edit/:drone_id', (req, res, next) => {
  const { drone_id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => res.render('drones/create-form'))
});

router.post('/drones/delete/:drone_id', (req, res, next) => {
  const { drone_id } = req.params

  Drone
    .findByIdAndDelete(drone_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

module.exports = router;
