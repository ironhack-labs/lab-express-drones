const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(drones => {
    res.render('./drones/list.hbs', { drone: drones });
  })
  .catch(error => next(error))



});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('./drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = req.body;

  Drone.create(newDrone)
  .then(() => res.redirect('/drones'))
  .catch(error => {
    console.log(error)
    res.redirect('/drones/create')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drone.findById(id)
  .then(drone => res.render('./drones/update-form', { drone }))
  .catch(error => next(error))  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  
  Drone.findByIdAndUpdate(id, req.body)
  .then(result => {
    console.log('result => ', result)

    res.redirect('/drones')
  })
  .catch(error => {
    console.log(error);

    res.redirect('/drones/:id/edit');
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
  .then(() => res.redirect('/drones'))
  .catch(error => next(error))
})

module.exports = router;