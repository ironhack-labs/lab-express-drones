const express = require('express');
const mongoose = require('mongoose');
// require the Drone model here
const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone
      .find()
      .then(drones => {
        res.render('list', { drones })
      })
      .catch(e => console.log(e))
});

router.get('/drones/create', (req, res, next) => {
  res.render('create-form')
});

router.post('/drones/create', (req, res, next) => {
  const drone = req.body
  Drone
      .create(drone)
      .then(() => res.redirect('/drones'))
      .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
            res.render('/drones/create', { errorMessage: error.message });
        }
      })
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone
      .findById(req.params.id)
      .then(drone => {
        res.render('update-form', { drone })
      })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const droneData = req.body
  Drone
      .findByIdAndUpdate(req.params.id, droneData, { new: true })
      .then(drone => {
        // res.redirect('/drones')
        console.log(drone)
      })
      .catch(e => console.log(e))
});

router.post('/drones/:id/delete', (req, res, next) => {
    Drone
        .findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/drones'))
        .catch(e => console.log(e))
});

module.exports = router;
