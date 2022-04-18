const express = require('express')
const router = express.Router()

const Drone = require('../models/Drone.model')



// -------------> DRONE READING <-------------

router.get('/drones', (req, res) => {

  // Iteration #2: List the drones
  Drone
    .find()
    .then(eachDrone => {
      console.log(eachDrone)
      res.render('drones/list', { eachDrone })
    })
    .catch(err => console.log(err))

})



// -------------> DRONE CREATION <-------------

router.get('/drones/create', (req, res) => {

  // Iteration #3: Add a new drone
  res.render('drones/create-form')

})

router.post('/drones/create', (req, res) => {

  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(newDrone => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
})



// -------------> DRONE UPDATE <-------------

router.get('/drones/:id/edit', (req, res) => {

  // Iteration #4: Update the drone
  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))

})

router.post('/drones/:id/edit', (req, res) => {

  // Iteration #4: Update the drone
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(drone => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))

})



// -------------> DRONE DELETE <-------------

router.post('/drones/:id/delete', (req, res) => {

  // Iteration #5: Delete the drone
  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))

})

module.exports = router
