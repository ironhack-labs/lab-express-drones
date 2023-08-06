const express = require('express')
const router = express.Router()

const Drone = require('../models/Drone.model')

router.get('/', (req, res) => {
  Drone.find()
    .then((drones) => res.render('drones/list', { drones }))
    .catch((err) => console.log(err))
})

router.get('/create', (req, res) => {
  res.render('drones/create-form')
})

router.post('/create', (req, res) => {
  const { name, propellers, maxSpeed } = req.body

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch((err) => console.log(err))
})

router.get('/:id/edit', (req, res) => {
  const { id } = req.params

  Drone.findById(id)
    .then((drone) => res.render('drones/update-form', drone))
    .catch((err) => console.log(err))
})

router.post('/:id/edit', (req, res) => {
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch((err) => {
      console.log(err)
      res.redirect(`/drones/${id}/edit`)
    })
})

router.post('/:id/delete', (req, res) => {
  const { id } = req.params

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch((err) => console.log(err))
})

module.exports = router
