const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require("../models/drone.model");

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then((allTheDronesFromDB) =>
      res.render("drones/list", { allTheDronesFromDB })
    )
    .catch((error) => `Error while fetching all drones: ${error}`);
});

router.get('/drones/create', (req, res) => res.render ("drones/create-form"));
router.post('/drones/create', (req, res) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
  .then(() => res.redirect("/drones"))
  .catch((error) => `Error while creating a new drone: ${error}`);
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
