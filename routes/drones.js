const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(allTheDronesFromDB =>{
      console.log('Drones from the DB: ', allTheDronesFromDB);
      res.render('../views/drones/list.hbs', {drones: allTheDronesFromDB})
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  console.log(req.body)
  Drone.create ({name, propellers, maxSpeed})
    .then(droneFromDB => {
      console.log(`New drone created: ${droneFromDB.name}.`)
      res.redirect('/drones')})
    .catch(error => {
      // res.send(error)
      res.render('../views/drones/create-form.hbs', error)
      console.log(error)
    });
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params;

  Drone.findById(droneId)
    .then(droneToEdit =>{
      res.render('drones/update-form.hbs', {drone: droneToEdit})
    })
    .catch(error => next(error));
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params;
  const {name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true})
    .then(updatedDrone => res.redirect(`/drones`))
    .catch(error => next(error));
});

router.post('/drones/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {droneId} = req.params;

  Drone.findByIdAndDelete(droneId)
    .then(()=> res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
