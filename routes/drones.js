const express = require('express')
const router = express.Router()
const drone = require('../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {
  drone
    .find()
    .then(drone => {
      res.render('drones/list', { drone })
    })
    .catch(err => console.log(err))
})
router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
})

router.post('/drones/create', (req, res, next) => {
  const { name, maxSpeed, propellers } = req.body

  drone
    .create({ name, maxSpeed, propellers })
    .then(drone => res.redirect('/drones'))
    .catch(err => console.log(err))
})

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params

  drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))
})

router.post('/drones/edit', (req, res, next) => {
  const { drone_id, name, maxSpeed, propellers } = req.body

  drone
    .findByIdAndUpdate(drone_id, { name, maxSpeed, propellers })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
})

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params

  drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
})

module.exports = router;
