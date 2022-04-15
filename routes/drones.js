const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('./../models/Drone.model')

router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone
    .find()
    .then(drones => {
      res.render('drones/list.hbs', { drones })
    })
    .catch(err => console.log(err))
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs")
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  
  const { name, propellers, maxSpeed} = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect(`/drones`)
    })
    .catch(err => console.log(err))
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { id } = req.params

  Drone
    .findById(id)
    .then(editDrone => {
      res.render('drones/update-form.hbs', editDrone)
    })
    .catch(err => console.log(err))
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { drone_id } = req.query
  const { name, propellers, maxSpeed} = req.body

  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones")
    })
    .catch(err => console.log(err))
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
});

module.exports = router;
