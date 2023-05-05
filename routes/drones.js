const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('./../models/Drone.model')

router.get('/drones/list', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
  .find()
  .then(drones => res.render('drones/list', { drones }) )
  .catch(err => console.log(err))
});

router.get('/drones/add-new-drone', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/add-new-drone', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, speed} = req.body

  Drone
  .create({ name, propellers, speed })
  .then(newDrone => res.redirect(`/drones/list`))
  .catch(err => console.log(err))
});

router.get('/drones/edit-drone/:drone_id', (req, res, next) => {
  // Iteration #4: Update the drone
  const { drone_id} = req.params
  
  Drone
    .findById(drone_id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))

});

router.post('/drones/edit-drone/:drone_id', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, speed } = req.body
  const { drone_id } = req.params

  Drone
  .findByIdAndUpdate(drone_id, { name, propellers, speed })
  .then (() => res.redirect(`/drones/list`))
  .catch(err => console.log(err))
});

router.post('/drones/:drone_id/delete-drone', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { drone_id } = req.params

  Drone
  .findByIdAndDelete(drone_id)
  .then(() => res.redirect(`/drones/list`))
  .catch(err => console.log(err))
});

module.exports = router;
