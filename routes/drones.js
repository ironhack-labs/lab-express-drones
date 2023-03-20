const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  
  Drone.find()
    .then((dronesArr) => {
      console.log(dronesArr)
      res.render('drones/list', {drone: dronesArr});
    })
    .catch((err) => {
      console.log('Error retreiving drones from DB: ', e);
    });

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  Drone.create(droneDetails)
    .then(droneFromDB => {
      res.redirect('/drones')
    })
    .catch(e => {
      console.error(`Error adding the drone: ${e}`);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((droneData) => {
      res.render('drones/update-form', droneData)
    })
    .catch(e => {
      console.error('Error accessing the drone: ', e);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;

  const droneUpdatedInfo = {
    name, 
    propellers,
    maxSpeed
  }

  Drone.findByIdAndUpdate(req.params.id, droneUpdatedInfo, { new: true })
    .then(updatedDrone => {
      res.redirect('/drones')
    })
    .catch(e => {
      console.error(`Error updating the drone: ${e}`);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
