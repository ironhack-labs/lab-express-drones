const express = require('express');
const router = express.Router();

const DroneModel = require('../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel
    .find()
    //.select({ name: 1, })
    .then(drones => {
      console.log(drones)
      res.render('drones/list', { drones })

    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body
  console.log(req.body)
  DroneModel
    .create({ name, propellers, maxSpeed })
    .then(() => {
      console.log(req.body)
      res.redirect(`/drones/`)
      //res.redirect(`/drones/`)
    })
    .catch(err => console.log(err))
});

router.get('/drones/:drone_id/edit', (req, res, next) => {
  const { drone_id } = req.params
  DroneModel

    .findById(drone_id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { drone_id } = req.params
  DroneModel
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/delete', (req, res, next) => {
  const { drone_id } = req.params
  console.log(req.params)

  DroneModel
    .findByIdAndDelete(drone_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});

module.exports = router;
