const express = require('express')

// require the Drone model here
const Drone = require('../models/Drones.model')
const router = express.Router()

/**
 * Find the /drones GET route in routes/drones.js.
Use the Mongoose .find() method to retrieve all the drones. Display all the drones on the drones/list.hbs view. Make sure you catch the error and output it to the terminal.
In the drones/list.hbs file, use a forEach loop to display tags with each drone's name, propellers, and speed.
Add the link that goes to /drones route in the layout.hbs file to easier navigate to the list of drones.
 */

router.get('/drones', (req, res, next) => {
  Drone.find({}).then((dronesFromDB) => {
    res.render('drones/list', { dronesFromDB })
    console.log(dronesFromDB)
  })
})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
})

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const body = req.body
  Drone.create(body)
    .then(() => {
      res.redirect('/drones')
    })
    .catch((error) => console.log(error))
})

router.get('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id
  Drone.findById(id)
    .then((drone) => res.render('drones/update-form', drone))
    .catch((error) => console.log(error))
})

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id
  const body = req.body
  Drone.findByIdAndUpdate(id, body)
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch((error) => console.log(error))
})

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const id = req.params.id
  const body = req.body
  Drone.findByIdAndDelete(id, body)
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch((error) => console.log(error))
})

module.exports = router
