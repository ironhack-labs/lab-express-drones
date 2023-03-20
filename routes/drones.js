const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then(dronesArr => {
      res.render("drones/list", { drones: dronesArr })
    })
    .catch(e => {
      console.log(e);
    })

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post('/drones', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const dronesDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  console.log(dronesDetails);
  Drone.create(dronesDetails)
    .then(() => {
      res.redirect("/drones")
    })
    .catch(e => console.log(e))

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;

  Drone.findById(id)
    .then(droneTobeEdit => {
      res.render("drones/update-form", { drones: droneTobeEdit })
    })
    .catch(e => console.log(e))

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(droneUpdate => {
      res.redirect(`/drones`)
    })
    .catch(e => console.log(e))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones")
    })
    .catch(e => console.log(e))

});

module.exports = router;
