const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')

router.get('/', (req, res, next) => {
  Drone
    .find()
    .then((drones) => {
      res.render('drones/list', { drones: drones })
    })
    .catch(err => console.log(err))
})

router.get('/create', (req, res, next) => {
  res.render('drones/create-form')
})

router.post('/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  Drone
    .create({ name, propellers, maxSpeed })
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params
  Drone
    .findById(id)
    .then((drone) => {
      res.render('drones/update-form', drone)
    })
})

router.post('/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params
  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params
  Drone
    .findByIdAndDelete(id)
    .then((drone => {
      res.redirect('/drones')
    }))
    .catch(err => console.log(err))
})

module.exports = router
