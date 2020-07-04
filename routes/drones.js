const express = require('express');

const Drone = require('../models/drone.model');
const { response } = require('express');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
  .then(allDrones => res.render('drones/list', { allDrones }))
  .catch(error => console.log('Error found'))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const body = req.body;
  Drone.create(body)
  .then((dbDrone) => {
    console.log(`${dbDrone.name} inserted`)
    res.redirect('/drones')
  })
  .catch(error => {
    console.log('Not inserted', error)
    res.redirect('/drones/create')
  })
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then(drone => res.render('drones/update-form', { drone }))
  .catch(error => console.log(`Founded error in edit page`, error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body)
  .then(drone => res.redirect('/drones'))
  .catch(error => console.log(`Error when editing drone`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(drone => {
    console.log('Drone succesfully deleted')
    res.redirect('/drones')
})
  .catch(error => console.log(`Founded error in delete page`, error))
});

module.exports = router;
