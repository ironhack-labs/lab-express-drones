const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model.js')



router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    let allDronesFromDB = await Drone.find();

    res.render('drones/list.hbs', {drones:  allDronesFromDB})
  } catch (error) {
    console.log(error)
  }
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try{
    res.render('drones/create-form.hbs')
  } catch (error){
    console.log(error)
  }

});

router.post('/drones/create',  async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    const {name, propellers, maxSpeed} = req.body
    await Drone.create({name, propellers, maxSpeed})
    res.redirect('/drones')
  } catch (error) {
    console.log(error)
  }
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const {droneId} = req.params
    let foundDrone = await Drone.findById(droneId)
    res.render('drones/update-form.hbs', {drone: foundDrone})
  } catch (error) {
    console.log(error)
  }
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const {droneId} = req.params
    const {name, propellers, maxSpeed} = req.body
    await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true})
    res.redirect('/drones')
  } catch (error) {
    console.log(error)
  }
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const {droneId} = req.params
    await Drone.findByIdAndDelete(droneId)
    res.redirect('/drones')
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
