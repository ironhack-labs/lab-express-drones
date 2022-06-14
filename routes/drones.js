const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require( '../models/Drone.model' );

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find().then((dronesdB) => {
    // console.log('retrieved drones from DB', dronesdB);
    res.render('drones/list.hbs', { drones: dronesdB });
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  // console.log(req.body);
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch((error) => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { droneId } = req.params;
  Drone.findById(droneId)
    .then((droneToEdit) => {
      console.log(droneToEdit);
      res.render('drones/update-form.hbs', { drone: droneToEdit });
    })
    .catch((error) => next(error));

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId = req.params.droneId;
  const { name, propellers, maxSpeed } = req.body;


  Drone.findByIdAndUpdate(
    droneId,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then((updatedDrone) => {
      console.log('drone updated', updatedDrone);
      res.redirect('/drones');
    })
    .catch((err) => console.log(err));

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const droneId = req.params.droneId;

  Drone.findByIdAndDelete(droneId)
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => console.log(err));
});

module.exports = router;
