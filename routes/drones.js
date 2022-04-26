const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(droneElement => res.render("drones/list",{droneElement}))
  .catch(err => console.log("Error while finding drones: ", err))

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body
  Drone.create({ name, propellers, maxSpeed })
  .then(res.redirect("/drones"))
  .catch(err => console.log("Error creating drone: ", err))

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  Drone.findById(id)
  .then(elem => res.render("drones/update-form", elem))
  .catch(err => console.log("Error finding drone: ", err))
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  const { name, propellers, maxSpeed } = req.body
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
  .then( ()=> {
    res.redirect("/drones")})
  .catch(err => console.log("Error updating drone: ", err))


});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params
  Drone.findByIdAndDelete(id)
  .then( ()=> {
    res.redirect("/drones")})
  .catch(err => console.log("Error deleting drone: ", err))
});

module.exports = router;
