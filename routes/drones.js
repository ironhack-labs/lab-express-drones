const express = require('express');
require('../configs/db.config');
// require the Drone model here

const Drone = require('../models/Drone.model');
const { render } = require('../app');
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(dronesFromDb => {
    res.render('./drones/list', {drones:dronesFromDb, title: 'Available Drones', page_drones: true});
    mongoose.connection.close();
  })
  .catch(err => console.log('Can\'t find drones', err));
});

router.get('/drones/:updatedId', (req, res, next) => {
  // Iteration #2: List the drones
  const {updatedId} = req.params;
  console.log(updatedId);
  Drone.find()
  .then(dronesFromDb => {
    res.render('./drones/list', {drones:dronesFromDb, title: 'Available Drones', page_drones: true, updatedId});
    mongoose.connection.close();
  })
  .catch(err => console.log('Can\'t find drones', err));
});

router.get('/drones-create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('./drones/create-form',{page_create: true, title: 'Create a new drone'}); 
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({name, propellers, maxSpeed})
  .then(droneFromDb => {
    res.render('./drones/create-form', {page_create: true, title: 'New Drone was created', droneFromDb});
    mongoose.connection.close();
    })
    .catch(err => 'Error creating the drone: ${err}');
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  Drone.findById(id)
  .then(droneFromDb => res.render('./drones/update-form.hbs', {title: 'Edit Drone', droneFromDb}))
  .catch(err => 'Error creating the drone: ${err}');
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;  
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed} , {new: true})
  .then(updatedDrone => res.redirect(`/drones/${updatedDrone.id}`))
  .catch(err => 'Error updating the drone: ${err}');
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;
  Drone.findByIdAndDelete(id)
  .then(updatedDrone => res.redirect(`/drones/`))
  .catch(err => 'Error deleting the drone: ${err}');
});

module.exports = router;
