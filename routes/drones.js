const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(droneFromDb => {
      const data = {
        dronesArr: droneFromDb
      }
      
      res.render("drones/list", data)
    })
    .catch(e => {
      console.log("Error connecting to DB", e)
      next(e)
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const createDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(createDrone)
    .then(newDrone => {
      res.redirect("/drones")
    })
    .catch(e => {
      console.log("Failed to create a new drone in DB", e)
      next(e)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

  Drone.findById(req.params.id)
    .then(editDrone => {
      res.render("drones/update-form", editDrone);
    })
    .catch(e => {
      console.log("failed to edit", e);
      next(e);
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

  const droneId = req.params.id;

  console.log("just want to check it out", droneId);

  const newUpdateDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.findByIdAndUpdate(droneId, newUpdateDrone)
    .then(newUpdate => {

      res.redirect("/drones")
    })
    .catch(e => {
      console.log("failed to edit", e);
      next(e);
    })
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.id

  Drone.findByIdAndRemove(droneId)
    .then(deletingDrone => {
      res.redirect("/drones")
    })
    .catch(e => {
      console.log("failed to edit", e);
      next(e);
    })

});

module.exports = router;
