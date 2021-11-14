const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(AllDronesDB => {
      console.log(`List of drones from DB: ${AllDronesDB}`);
      res.render('../views/drones/list.hbs', { drones: AllDronesDB });
    })
    .catch(err => {
      console.log(`An error occurred: ${err}`);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('../views/drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(droneDB => {
      console.log(`New drone created: ${droneDB.name}.`);
      res.render('../views/new-drone.hbs', droneDB);
    })
    .catch(err => console.log(err));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drone.findById(id)
    .then(drone => {
      res.render('../views/drones/update-form.hbs', { drone });
    })
    .catch(err => console.log(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(droneDBupdate => {
      console.log(droneDBupdate);
      res.redirect('/drones');
    })
    .catch(err => console.log(err));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => err);
});

module.exports = router;
