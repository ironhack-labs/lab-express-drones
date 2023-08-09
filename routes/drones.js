const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
        res.render('drones/list', {drones})
    })
    .catch(err => next(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  
  Drone.findOne({ name }).then(drone => {
    if (!drone) {
      Drone.create({ name, propellers, maxSpeed })
        .then(drone => (
          res.redirect("/drones")
        )).catch(err => next(err))
    }
    else {
      res.render("error", { error: "Drone already exists." })
    }
  }).catch(err => next(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  Drone.findById(id)
    .then((droneToUpdate) => {
      res.render('drones/update-form.hbs', {droneToUpdate})
    })
    .catch(err => {
      console.log('Error get route updating drone: ', err)
      next(err)
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true})
    .then((updatedDrone) => {
      console.log('Updated drone: ', updatedDrone)
      res.redirect('/drones')
    })
    .catch(err => {
      console.log('Error updating a drone: ', err)
      next(err)
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => {
      console.log('Error deleting a drone: ', err)
      next(err)
    })
});

module.exports = router;
