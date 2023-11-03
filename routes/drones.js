const express = require('express')
const router = express.Router()

const Drone = require('./../models/Drone.model')

router.get('/drones', (req, res) => {

  Drone
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))

})

router.get('/drones/create', (req, res) => {
  res.render('drones/create-form')
})

router.post('/drones/create', (req, res) => {

  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

})

router.get('/drones/:id/edit', (req, res) => {

  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))

})

router.post('/drones/:id/edit', (req, res) => {

  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

})

router.post('/drones/:id/delete', (req, res) => {

  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

})

module.exports = router
