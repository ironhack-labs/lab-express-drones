const express = require('express');
const { findByIdAndUpdate, findByIdAndRemove } = require('./../models/Drone.model');

// require the Drone model here
const Drone = require('./../models/Drone.model');

const router = express.Router();

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find();
    res.render('drones/list', { drones });
  } catch (error) {
    console.log('Error while retrieving list of drones', error)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = req.body;
  try {
    const createdDrone = await Drone.create(newDrone);
    res.redirect('/drones');
  } catch (error) {
    console.log('Error while creating new drone', error)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  try {
    const drone = await Drone.findById(id);
    res.render('drones/update-form', { drone });
  } catch (error) {
    console.log('Error while retrieving one drone', error)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.findByIdAndUpdate(id, { name, propellers: Number(propellers), maxSpeed: Number(maxSpeed) }, { new: true });
    res.redirect('/drones');
  } catch (error) {
    console.log('Error while retrieving one drone', error)
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  try {
    await Drone.findByIdAndRemove(id);
    res.redirect('/drones');
  } catch (error) {
    console.log('Error while deleting one drone', error)
  }
});

module.exports = router;