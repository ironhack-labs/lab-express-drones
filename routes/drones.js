const express = require('express');
const router = express.Router();



const Drones = require('../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drones
    .find()
    .then(allDrones => {
      res.render('drones/list', { allDrones })
    })
    .catch(err => console.log(err))



  // Iteration #2: List the drones
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form')
});


router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  Drones
    .create({ name, propellers, maxSpeed })
    .then(newDrone => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))

  // Iteration #3: Add a new drone
  // ... your code here
});








router.get('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params
  Drones
    .findById(id)
    .then(chooseDrone => {
      res.render('drones/update-form', chooseDrone)
    })
    .catch(err => console.log(err))





  // Iteration #4: Update the drone
  // ... your code here q
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drones
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(updateDrone => {
      ///console.log(updateDrone)
      res.redirect('/drones')
    })
    .catch(err => console.log(err))

  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {

  const { id } = req.params
  Drones
    .findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))
});

module.exports = router;
