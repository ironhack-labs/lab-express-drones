const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone-model')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((drones)=>{
    res.render('drones/list',{drones})
    .catch(err => console.log(`${err}`))
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
    .then(() => {res.redirect('/drones')})
    .catch(error => {
      console.log(`Error adding drone: ${error}`)
      res.redirect('/drones/create')
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then(drone => res.render('drones/update-form.hbs',{drone}))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const drone = req.body
  Drone.findByIdAndUpdate(req.params.id, drone, { new: true })
    .then((d) => res.render('drones-list', d))
    .catch((error) => next(error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
  .then(()=> res.redirect('/drones'))
  .catch((error)=> console.log(`Error deleting drone: ${error}`))
});

module.exports = router;
