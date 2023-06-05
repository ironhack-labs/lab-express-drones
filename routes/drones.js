const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesFromDB) => {
      const drones = {
        droneArr: dronesFromDB
      }
      res.render("drones/list", drones)
    })
    .catch((err) => {
      console.log("error", err)
      next(err)
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
 res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed  
  }

  //console.log(newDrone)
  Drone.create(newDrone)
    .then((newD) => {
      console.log(newD)
      res.redirect("/drones")
    })
    .catch((err) => {
      console.log("failed", err)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id

  Drone.findById(id)
    .then((droneToUpdate) => {
      res.render("drones/update-form", {banana: droneToUpdate})
    })
    .catch((err) => {
      console.log("failed", err)
      next(err)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id

  const droneToUpdate = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  Drone.findByIdAndUpdate(id, droneToUpdate, {new: true})
    .then((updatedDrone) => {
      console.log(updatedDrone)
      res.redirect("/drones")
    })
    .catch((err) => {
      console.log("error to update", err)
      next(err)
  })

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id

  Drone.findByIdAndDelete(id)
    .then((deletedObj) => {
      res.redirect("/drones")
    })
    .catch((e) => {
      console.log("Failed to delete", e)
      next(e)
    })
});

module.exports = router;
