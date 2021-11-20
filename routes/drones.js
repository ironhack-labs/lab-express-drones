const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');


// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((drones) => {
    console.log(drones);
    res.render("drones/list", { drones });
  })
  .catch((err) => {
    console.log(err);
  });

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render("drones/create-form.hbs");
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
 const drone = req.body;
 const newDrone = await Drone.create(drone);
 console.log("newDrone", newDrone);
 res.redirect("/drones");
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
