const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', async(req, res, next) => {
  // Iteration #2: List the drones
  try{
    let allDronesFromDB = await Drone.find();
    res.render('drones/list.hbs', {drones: allDronesFromDB});
  }
  catch(error){
    console.log('Error while getting drones', error);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', async(req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    const {name, propellers, maxSpeed} = req.body;
    await Drone.create({name, propellers, maxSpeed});
    res.redirect('/drones');
  }
  catch(error){
    res.render('drones/create-form');
    console.log(error);
  }
});

router.get('/drones/:droneID/edit', async(req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const {droneID} = req.params;
    let foundDrone = await Drone.findById(droneID);
    res.render('drones/update-form.hbs', {drone: foundDrone});
  }
  catch(error){
    console.log(error);
  }
});

router.post('/drones/:droneID/edit', async(req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const {droneID} = req.params;
    const {name, propellers, maxSpeed} = req.body;
    await Drone.findByIdAndUpdate(droneID, {name, propellers, maxSpeed}, {new: true});
    res.redirect('/drones');
  }
  catch(error){
    console.log(error);
  }
});

router.post('/drones/:droneID/delete', async(req, res, next) => {
  // Iteration #5: Delete the drone
  try{
    const {droneID} = req.params;
    await Drone.findByIdAndDelete(droneID);
    res.redirect('/drones');
  }
  catch(error){
    console.log(error);
  }
});

module.exports = router;
