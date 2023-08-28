const express = require('express');
const router = express.Router();

// require the Drone model here
Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((resultDrones) => {
      res.render("drones/list", { drones: resultDrones });
        })
    .catch((err) => {
      console.error("Error getting all drones ", err);
    });
  })

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
  .then((result) => {
    res.redirect("/drones")
      })
  .catch((err) => {
    console.error("Error creating the drone ", err);
    res.redirect("/drones/create")
  });
})


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
