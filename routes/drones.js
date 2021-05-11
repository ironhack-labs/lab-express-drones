const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then(dronesFromDb => {
      console.log('drones:', dronesFromDb)
      res.render('drones/list',{drones: dronesFromDb})
    }).catch(e => {
      console.log('Error while getting drones from Db')
      next(e)
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed, image} = req.body

  Drone.create( { name, propellers, maxSpeed, image} )
    .then(() => {
      console.log('drone created succesfully')
      res.redirect('/drones')
    })
    .catch(() => {
      console.log('there was an error creating the drone')
      res.render('drones/create-form')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params

  Drone.findById(id)
    .then((droneToEdit => {
      console.log('drone edited', droneToEdit)
      res.render('drones/update-form', { drone: droneToEdit })
    }))
    .catch(e => next(e))
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  const { name, propellers, maxSpeed, image } = req.body
  
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed, image }, {new: true})
    .then(updatedDrone => {
      console.log('update:', updatedDrone)
      res.redirect('/drones')
      
    })
    .catch(e => console.log('There was an error while updating the drone'))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const { id } = req.params

  Drone.findByIdAndDelete(id)
    .then(updatedDrone => {
      console.log('update:', updatedDrone)
      res.redirect('/drones')
      
    })
    .catch(e => console.log('There was an error while deleting the drone'))
});

module.exports = router;
