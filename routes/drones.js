const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model")


router.get('/drones', (req, res, next) => {
 Drone.find()
 .then( (dronesFromDB) => {
  const data = {
    dronesArr: dronesFromDB
  };
  console.log(data)
  res.render("drones/list", data)
 })
 .catch( (error) => {
  console.log("Error finding Drones in DB", error);
  next(error);
})
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
