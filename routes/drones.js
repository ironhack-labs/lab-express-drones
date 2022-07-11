const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesArr) => {
      res.render("drones/list", {dronesArr})
    })
    .catch((error) => console.log("Error getting data from DB", error))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  Drone.create(droneDetails)
  .then(() => {
    res.redirect("/drones")
  })
  .catch((error) => console.log("Error creating new document", error))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then(droneToEdit => {
    res.render("drones/update-form", {droneToEdit})
  })
  .catch((error) => console.log("Error getting drone data from db", error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  const newDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  Drone.findByIdAndUpdate(droneId, newDetails)
  .then(() => res.redirect("/drones"))
  .catch((error) => console.log("Error editing drone data", error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then( () => {res.redirect("/drones")})
  .catch((error) => console.log("Error deleting drone data", error))
});

module.exports = router;
