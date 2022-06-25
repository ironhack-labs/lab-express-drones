const express = require('express');
const { findByIdAndDelete } = require('./../models/Drone.model');
const router = express.Router();

const Drone = require('./../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {

  Drone
    .find()
    .then(drones => {
      console.log(drones)
      res.render('drones/list', { drones })
    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  Drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))
}
);

router.post('/drones/update-form/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

module.exports = router;
