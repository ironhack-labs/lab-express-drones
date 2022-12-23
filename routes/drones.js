const express = require('express');
const router = express.Router();


// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => {
      res.render('drones/list', { drones: dronesFromDB});
    })
    .catch(err => {
      console.log("Error getting drones from DB", err);
      next();
    })
});


router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
}

return Drone.create(droneDetails)    
  .then((droneDetails) => {
    res.redirect("/drones")
  })
  .catch(err => {
      console.log("error creating new drone DB", err);
      next();
  })
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
