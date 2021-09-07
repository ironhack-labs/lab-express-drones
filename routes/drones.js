const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(allDrones =>res.render("drones/list", {Drones: allDrones}))
  .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  
  const newDrone = req.body

  Drone.create(newDrone)
  .then(droneCreated =>{
    console.log(droneCreated),
    res.redirect("/drones")
  })
  .catch(err => console.log(err))

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  Drone.findById(id)
  .then(droneToUpdate => {res.render("drones/update-form", droneToUpdate)})
});

router.post('/drones/:id/edit', (req, res, next) => {
  
  const {name, propellers, maxSpeed} = req.body
  const {id} = req.params

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true})
  .then(updatedDrone =>{
    console.log(updatedDrone), 
    res.redirect("/drones")
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.body

  Drone.findOneAndDelete(id)
  .then(deleted =>{
    console.log("drone deleted", deleted)
    res.redirect("/drones")
  })
});

module.exports = router;
