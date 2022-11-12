const express = require('express');
const router = express.Router();

const Drones = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  Drones
    .find()
    .then(dronesFromDB => {
      res.render('drones/list', { drones: dronesFromDB })
    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
  // console.log('created drone')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drones
    .create({ name, propellers, maxSpeed })
    .then(drone => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
});

router.get('/drones/:drone_id/edit', (req, res, next) => {

  const { drone_id } = req.params

  Drones
    .findById(drone_id)
    .then(drone => {
      res.render('drones/update-form.hbs', drone)
      // console.log('update drone')
    })
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { drone_id } = req.params

  Drones
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/delete', (req, res, next) => {

  const { drone_id } = req.params

  Drones
    .findByIdAndDelete(drone_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

module.exports = router;
