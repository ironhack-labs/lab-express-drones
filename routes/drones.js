const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

// list the drones
router.get('/drones', (req, res, next) => {
 Drone.find()
      .then((dronesFromDb) => {
        
        res.render("drones/list", { drones: dronesFromDb });
      })
      .catch((err) => {
        console.log("error getting details from the db", err);
        next();
      });
  });


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
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
