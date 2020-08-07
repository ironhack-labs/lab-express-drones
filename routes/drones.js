const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');


router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(dronesFromDB => {
      console.log(dronesFromDB);
      res.render('drones/list.hbs', {drones: dronesFromDB});
    }).catch(err => console.log(`Error finding all drones: ${err}`))
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then(newDrone => {
      console.log(newDrone);
      res.redirect('/drones');
    }).catch(err => console.log(`Error creating new drone: ${err}`))
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then(droneFromDB => {
      res.render('drones/update-form.hbs', {drone: droneFromDB})
    }).catch(err => console.log(`Error finding drone by id: ${err}`))
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedDrone => {
      console.log(updatedDrone);
      res.redirect('/drones')
    }).catch(err => console.log(`Error updating drone info: ${err}`))
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('back');
    }).catch(err => console.log(`Error finding and deleting drone: ${err}`))
});

module.exports = router;
