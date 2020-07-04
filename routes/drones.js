const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((dronesFromDB)=> res.render('drones/list', {drones: dronesFromDB}))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const reqBody = req.body;
  Drone.create(reqBody)
    .then(() => res.redirect('/drones'))
    .catch(e => console.log(e))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
    .then(droneFromDB => res.render('drones/update-form', droneFromDB))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed},  { new: true })
  .then(()=> res.redirect('/drones'))
  .catch(e => console.log(e))
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params
  Drone.findByIdAndDelete(id)
  .then(() => res.redirect('/drones'))
  .catch(err => console.log("Error", err))
});

module.exports = router;
