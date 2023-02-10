const express = require('express')
const router = express.Router()

// Model
const Drone = require('./../models/Drone.model')


// Routes
// List
router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(error => console.log('Error:', error))
})

// Create
router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
})

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
})

// Edit
router.get('/drones/:drone_id/edit', (req, res, next) => {
  const { drone_id } = req.params
  Drone
    .findById(drone_id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))
})

router.post('/drones/:drone_id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed, drone_id } = req.body
  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
})

// Delete
router.post('/drones/:drone_id/delete', (req, res, next) => {
  const { drone_id } = req.params
  Drone
    .findByIdAndDelete(drone_id)
    .then(() => { res.redirect('/drones') })
    .catch(err => console.log(err))
})

module.exports = router;
