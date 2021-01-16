const express = require('express');

// require the Drone model here

const router = express.Router();

const Drone = require('../models/drone.model')
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allTheDronesFromDB) => {
      console.log(`here are the drones: ${allTheDronesFromDB}`);
      res.render("drones/list.hbs", { allTheDronesFromDB });
    })
    .catch((err) => console.log(`Error while getting all the drones: ${err}`));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render(`drones/create-form`);
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
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
  Drone.findById(req.params.id)
  .then(foundDrone => {
    res.render(`drones/update-form`, foundDrone);
  })
  .catch(err => {
    console.log(`error finding drone by id due to ${err}`);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed }, { new: true })
  .then((updatedDrone) => {
    res.redirect(`/drones`);
  })
  .catch(err => {
    console.log(`error updating book due to ${err}`);
  });
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect(`/drones`);
  })
  .catch(err => {
    console.log(`err deleting drone due to ${err}`);
  });
  // ... your code here
});

module.exports = router;
