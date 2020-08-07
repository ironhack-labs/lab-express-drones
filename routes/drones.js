const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model');
const router = express.Router();

/** 
Listing all the drones 
 */
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find().then(allDrones => {
    res.render('drones/list', { drones: allDrones });
  }).catch(err => {
    console.log(`Err while getting the drones from the  DB: ${err}`)
  });
});

/**
// Iteration #3: Add a new drone
 */
router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form')
});

// Iteration #3: Add a new drone
router.post('/drones/create', (req, res, next) => {
  const { name, propellers, speed } = req.body;
  Drone.create({ name, propellers, speed }).then(() => {
    res.redirect('/drones');
  }).catch(error => `Error while creating a new drone: ${error}`);
});

// Iteration #4: Update the drone
router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id).then(droneToEdit => {
    // console.log(droneToEdit);
    res.render('drones/update-form', droneToEdit);
  })
    .catch(error =>
      console.log(`Error while getting a single drone for edit: ${error}`)
    );

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, speed } = req.body;
  console.log()
  console.log(req.body);
  console.log({ name, propellers, speed });
  Drone.findByIdAndUpdate(
    id,
    { name, propellers, speed },
    { new: true }
  )
    .then(updatedDrone => res.redirect(`/drones`))
    .catch(error =>
      console.log(`Error while updating a single drone: ${error}`)
    );
});



router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
