const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {

  Drone
    .find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => {
      console.log('error', err)
    })
});

router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => {
      console.log(err)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params;

  Drone
    .findById(id)
    .then((droneId) => {
      res.render('drones/update-form', droneId)
    })
    .catch(err => {
      console.log(err)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  const { id } = req.params;

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => {
      console.log(err)
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Drone
    .findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => {
      console.log(err)
    })
});

module.exports = router;
