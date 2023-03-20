const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(dronesArr => {

      const data = {
        drones: dronesArr
      };

      res.render("drones/list", data);
    })
    .catch(e => {
      console.log("error getting drone from DB", e);
      next(e);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  router.get("/drones/create", (req, res, next) => {
    res.render("drones/create-form");
  });
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
