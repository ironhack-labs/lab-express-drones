const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try{
    let listOfDrones = await Drone.find();
    console.log(listOfDrones);
    res.render('../views/drones/list.hbs', {drones: listOfDrones});
  }catch(error){
    console.log(error);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    const {name, propellers, maxSpeed} = req.body;
    
    await Drone.create({name, propellers, maxSpeed});
    res.redirect("/drones");
  }catch(error) {
    console.log(error);
  } 
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const {droneId} = req.params;
    console.log('droneId ' +droneId);
    let foundDrone = await Drone.findById(droneId);
    console.log(foundDrone);
    res.render('drones/update-form.hbs', {drone: foundDrone});
  }catch(error){
    console.log(error);
  }
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
        const {droneId} = req.params;
        console.log(droneId);
        const {name, propellers, maxSpeed} = req.body;

        await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true});

        res.redirect('/drones');
    }catch(error){
        console.log(error);
    }
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try{
        const {droneId} = req.params;
        await Drone.findByIdAndDelete(droneId);
        console.log(droneId);
        res.redirect('/');
    }catch(error){
        console.log(error);
    }

});

module.exports = router;
