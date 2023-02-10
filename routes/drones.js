const express = require('express')
const router = express.Router()
const Drone = require('./../models/Drone.model')
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase()


// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .sort({ name: 1 })
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log('You have an error: ', err))
})

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
})

router.post('/drones/create', (req, res, next) => {
  let { name, propellers, maxSpeed } = req.body
  name = capitalized(name)
  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('You have an error: ', err))
})

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  Drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log('You have an error: ', err))
})

router.post('/drones/:id/edit', (req, res, next) => {
  let { name, propellers, maxSpeed, id } = req.body
  name = capitalized(name)
  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('You have an error: ', err))
})

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params
  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('You have an error: ', err))
})

module.exports = router
