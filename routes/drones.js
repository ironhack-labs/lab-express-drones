const express = require('express');

const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model');

router.get('/drones/list', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))

});

router.get('/drones/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body

  DroneModel
    .create({ name, propellers, maxSpeed })
    .then(dron => res.redirect("/drones/list"))
    .catch(err => res.redirect("/drones/create-form"))
});

router.get('/drones/:dron_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { dron_id } = req.params

  DroneModel
    .findById(dron_id)
    .then(dron => res.render('drones/update-form', dron))
    .catch(err => console.log(err))
});

router.post('/drones/:dron_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed, dron_id } = req.body

  DroneModel
    .findByIdAndUpdate(dron_id, { name, propellers, maxSpeed })
    .then(dron => res.redirect("/drones/list"))
    .catch(err => res.redirect('/drones/:dron_id/edit'))
});

router.post('/drones/:dron_id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { dron_id } = req.params

  DroneModel
    .findByIdAndDelete(dron_id)
    .then(() => res.redirect("/drones/list"))
    .catch(err => console.log(err))
});

module.exports = router;
