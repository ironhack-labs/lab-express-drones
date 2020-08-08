const express = require('express');

// require the Drone model here

const router = express.Router();
const DroneModel = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
    .then(allTheDronesFromDB => {
      console.log(allTheDronesFromDB);
      res.render('drones-list', { drones: allTheDronesFromDB });
    })
    .catch(err =>
      console.log(`Err while getting the drones from the  DB: ${err}`)
    );
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drone-create')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed} = req.body;

  DroneModel.create({name, propellers, maxSpeed})
   .then(() => res.redirect('/drones'))
   .catch(error => `Error while creating a new drone: ${error}`)
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  DroneModel.findByIdAndUpdate(id)
    .then(droneToEdit => {
      // console.log(droneToEdit);
      res.render('drone-edit', droneToEdit);
    })
    .catch(error =>
      console.log(`Error while getting a single drone for edit: ${error}`)
    );
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;

  DroneModel.findByIdAndDelete(id)
  .then(() => res.redirect('/drones'))
  .catch(error => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
