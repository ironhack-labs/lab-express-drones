const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(allDronesFromDB => {
      console.log(allDronesFromDB)
      res.render('drones/list', {drones: allDronesFromDB});
    })
    .catch(err => console.log(`Error retrieving drones: `, err));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, speed} = req.body;
  Drone.create({name: name, propellers: propellers, maxSpeed: speed})
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => console.log(`Somthing went wrong creating drone: `, err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  Drone.findById(id)
    .then(droneToEdit => {
      res.render('drones/update-form', droneToEdit)
    })
    .catch(err => console.log(`Could not find drone to edit: `, err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const {name, propellers, speed} = req.body;
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed: speed}, {new: true})
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('Error while updating drone: ', err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log('Error deleting drone: ', err))
});

module.exports = router;
