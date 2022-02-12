const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await Drone.find();
    res.render('drones/list', {drones: allDrones})

  } catch (error) {
    console.log(error);
  }
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render('drones/create-form')
  } catch (error) {
    console.log(error)
  }
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const { name, propellers, speed } = req.body;
    const createdDrone = await Drone.create({ name, propellers, speed })
    res.redirect('/drones');
  } catch (error) {
    console.log(error)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params;
    const chosenDrone = await Drone.findById(id)
    res.render('drones/update-form', {drone: chosenDrone} )
  } catch (error) {
    console.log(error)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params;
    const { name, propellers, speed } = req.body;
    const updatedDrone = await Drone.findByIdAndUpdate(id, {name, propellers, speed}, {new: true})
    res.redirect('/drones');
  } catch (error) {
    console.log(error)
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const {id} = req.params;
    const deletedDrone = await Drone.findByIdAndDelete(id);
    res.redirect('/drones');
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
