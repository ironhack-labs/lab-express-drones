const express = require('express');
const router = express.Router();

const DroneModel = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then(dronesFromDB => {
      res.render("drones/list", {drones: dronesFromDB})
    })
    .catch(e => {
      console.log("Error getting drones", e)
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  DroneModel.create({name, propellers, maxSpeed})
    .then(newDrone => {
      console.log("drone created: ", newDrone)
      res.redirect("/drones")
    })
    .catch(e => {
      console.log("Error creating drone", e)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
