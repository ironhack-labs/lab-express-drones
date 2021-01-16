const express = require('express');

// require the Drone model here

const router = express.Router();

const Drone = require(`../models/Drone.model`);

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(dronesFromDB => {
    res.render(`drones/list`, { dronesFromDB });
  })
  .catch(err => {
    console.log(`error getting drones from database due to: ${err}`);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render(`drones/create-form`);
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
  .then((savedDrone) => {
    res.redirect(`/drones`);
  })
  .catch(err => {
    console.log(`error creating drone due to ${err}`);
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  Drone.findById(req.params.id)
  .then(foundDrone => {
    res.render(`drones/update-form`, foundDrone);
  })
  .catch(err => {
    console.log(`error finding drone by id due to ${err}`);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed }, { new: true })
  .then((updatedDrone) => {
    res.redirect(`/drones`);
  })
  .catch(err => {
    console.log(`error updating book due to ${err}`);
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect(`/drones`);
  })
  .catch(err => {
    console.log(`err deleting drone due to ${err}`);
  });
});

module.exports = router;
