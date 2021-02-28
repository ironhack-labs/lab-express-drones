const express = require('express');

// require the Drone model here
const DroneModel = require("../models/Drone.model")
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then(droneList => {
    res.render("drones/list", {drone: droneList})
  })
  .catch((error) => {
    next(error);
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.create({ name, propellers, maxSpeed })
  .then(() => {
    res.redirect("/drones");
  })
  .catch((error) => {
    next(error);
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
  .then((drone) => {
    res.render("drones/update-form", {drone})
  })
  .catch((error) => {
    next(error);
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
  .then(() => {
    res.redirect("/drones")
  })
  .catch((error) => {
    next(error);
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones")
  })
  .catch((error) => {
    next(error);
  })
});

module.exports = router;
