const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.model.js")

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((dronesFromDb)=>{
    console.log(dronesFromDb)
    res.render('drones/list', {drones: dronesFromDb})
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  Drone.create(req.body)
  .then((createdDrone) => {
    res.redirect("/drones")
  })
  .catch((err) => console.log(`Error creating drone: ${err}`));

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then((droneFromDb)=>{
    console.log("Found drone: ", droneFromDb)
    res.render('drones/update-form', {drone:droneFromDb })
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((updatedDrone)=>{
    console.log({updatedDrone})
    res.redirect("/drones")
  })
  .catch((err) => console.log(`Error updating drone: ${err}`));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log(req.params.id)
    res.redirect("/drones");
})
.catch((err) => console.log(`Error deleting drone: ${err}`));
});

module.exports = router;
