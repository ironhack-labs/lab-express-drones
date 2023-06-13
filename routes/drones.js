const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone
    .find()
    .then(dronesInDB => {
      res.render('drones/list.hbs', { droneInDB: dronesInDB })
    })
    .catch(err => next(err))
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(drone => {
      res.redirect('/drones')
    })
    .catch(() => res.redirect('/drones/create'))
})

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  Drone.findById(id).then(droneParams => {
    console.log(droneParams)
    res.render('drones/update-form', { drone: droneParams })
  })
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let { name, propellers, maxSpeed } = req.body
  const { id } = req.params

  Drone.findById(id).then(droneParams => {
    if (!name) name = droneParams.name
    if (!propellers) propellers = droneParams.propellers
    if (!maxSpeed) maxSpeed = droneParams.maxSpeed

    Drone
      .findByIdAndUpdate(id, { name, propellers, maxSpeed })
      .then(() => res.redirect('/drones'))
  })
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params
  
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
});

module.exports = router;
