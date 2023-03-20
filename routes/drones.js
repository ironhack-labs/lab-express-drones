const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then(droneArray => {
      const data = {
        drones: droneArray
      }
      res.render("./drones/list", data);
    })
    .catch(e => {
      console.log("error getting books from DB", e);
      next(e);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("./drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  Drone.create(droneDetails)
    .then(() => {
      res.redirect("/drones");
    })
    .catch(e => {
      console.log("error creating new drone", e);
      next(e);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId = req.params.id;
  Drone.findById(droneId)
    .then((droneToEdit) => {
      res.render('./drones/update-form', { drone: droneToEdit });
    })
    .catch(e => {
      console.log("error finding drone", e);
      next(e);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId = req.params.id;
  const data = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  console.log(data);
  Drone.findByIdAndUpdate(droneId, data, { new: true })
    .then((response) => {
      console.log(response);
      res.redirect("/drones");
    })
    .catch(e => {
      console.log("error updating drone", e);
      next(e);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const droneId = req.params.id;
  Drone.findByIdAndDelete(droneId)
    .then(() =>{
      res.redirect("/drones");
    })
    .catch(e => {
      console.log("error deleting new drone", e);
      next(e);
    });
});

module.exports = router;
