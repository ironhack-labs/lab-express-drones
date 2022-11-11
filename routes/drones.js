const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')

router.get('/drones', (req, res) => {
  Drone
    .find()
    .then(dronesFromDB => {
      res.render('drones/list', { drones: dronesFromDB })
    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(drones => {
      res.redirect(`/drones`)
    })
    .catch(err => console.log(err))
});

router.get('/drones/:drone_id/edit', (req, res) => {
  const { drone_id } = req.params

  Drone
    .findById(drone_id)
    .then(drones => {
      res.render('drones/update-form', drones)
    })
    .catch(err => console.log(err))

});

router.post('/drones/:drone_id/edit', (req, res) => {
  const { name, propellers, maxSpeed } = req.body
  const { drone_id } = req.params

  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/delete', (req, res) => {
  const { drone_id } = req.params
  Drone
    .findByIdAndDelete(drone_id)
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

module.exports = router;
