const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find().then(allTheDronesFromDB => {
    res.render('./drones/list', { allDrones: allTheDronesFromDB })
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("./drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  //
  Drone.create({
    name: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }).then(() => {
    res.redirect("/drones");
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id).then((drone) => {
    res.render("./drones/update-form", { drone: drone });
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  Drone.findByIdAndUpdate(req.params.id, {
    name: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }).then(() => {
    res.redirect("/drones");
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/drones");
  });
});

module.exports = router;
