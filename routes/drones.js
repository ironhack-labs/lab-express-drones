const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((data => res.render('drones/list', {drone: data})))
  .catch(error => console.log(`Error listing drones: ${error}`))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then(() => {res.redirect('/drones')})
    .catch(error => {
      console.log(`Error adding drone: ${error}`)
      res.redirect('/drones/create')
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then(drone => res.render('drones/update-form',{drone}))
    .catch(error => {
      console.log(`Error updating drone: ${error}`)
      res.redirect('/drones')
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed}, { new: true })
    .then(drone => console.log(`Drone ${drone.id} updated`))
    .catch(error => {
      console.log(`Error updating drone: ${error}`)
      res.redirect('/drones')
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
