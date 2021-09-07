const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(allTheDronesFromDB =>{
      console.log('Drones from the DB: ', allTheDronesFromDB);
      res.render('../views/drones/list.hbs', {drones: allTheDronesFromDB})
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, speed} = req.body;
  Drone.create ({name,propellers,speed})
    .then(droneFromDB => console.log(`New drone created: ${droneFromDB.name}.`))
    .catch(res.render('../views/drones/create-form.hbs'));
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
