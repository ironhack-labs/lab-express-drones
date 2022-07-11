const express = require('express');
const router  = express.Router();
const Drone = require("../models/Drone.model");

// Routes


router.get('/drones', (req, res) => {  // Iteration #2: List all the drones in DB
Drone.find()
  .then((droneArr) => {
    res.render("drones/list", {droneArr});
  })
  .catch((error) => console.log("Error getting data from DB", error));
});

router.get('/drones/create', (req, res) => {  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res) => {  // Iteration #3: Add a new drone

  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  Drone.create(newDrone)
  .then(() => {
    res.redirect("/drones");    //show the new list
  })
  .catch((error) => console.log("Error creating new Drone in DB", error));
});

router.get('/drones/:id/edit', (req, res) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
