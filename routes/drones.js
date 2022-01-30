const express = require('express');
const { render } = require('express/lib/response');
const { findByIdAndUpdate } = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(drones => {
      res.render("drones/list", { drones })
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  const { name, props, speed } = req.body
  Drone.create({ name, propellers: props, maxSpeed: speed })
    .then(() => {
      Drone.find()
        .then(drones => {
          res.render("drones/list", { drones })
        })
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id
  Drone.findById(droneId).then(drone => {
    res.render("drones/update-form", drone)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { _id } = req.params
  console.log(_id)
  const { name, props, speed } = req.body
  Drone.findByIdAndUpdate(_id, { name: name, propellers: props, maxSpeed: speed })
    .then((result) => {
      console.log(result)
    })
    .then(() => {
      Drone.find()
        .then(drones => {
          res.render("drones/list", { drones })
        })
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.id
  Drone.findByIdAndDelete(droneId)
    .then((result) => {
      console.log(result)
    })
    .then(() => {
      Drone.find()
        .then(drones => {
          res.render("drones/list", { drones })
        })
    })
});

module.exports = router;
