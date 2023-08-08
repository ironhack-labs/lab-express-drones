const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js')

router.get('/drones', async (req, res, next) => {
 try{
  let allDrones = await Drone.find();
  res.render('drones/list.hbs', {allDrones});
}
catch(err){
  console.log("error")
}
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try{
    const {name, propellers, maxSpeed} = req.body;
    await Drone.create({name, propellers, maxSpeed});
    res.redirect('/drones');
  }
  catch(err){
    console.log("Error creating new drone")
  }
});

router.get('/drones/:droneId/edit',async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try{
    const {droneId} = req.params;
    let foundDrone = await Drone.findById(droneId);
    res.render('drones/update-form.hbs', {drone: foundDrone})

  }
  catch(err){
    console.log("Error finding drone")
  }
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try{
    const {droneId} = req.params;
    const {name, propellers, maxSpeed} = req.body;
    await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}), {new: true};
    res,redirect('/list');
    console.log("Updated drone")
  }
  catch(err){
    console.log("Error updating drone")
  }
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try{
    const {droneId} = req.params;
    await Drone.findByIdAndDelete(droneId);
    res.redirect('/drones');
    console.log("Deleted drone")
  }
  catch(err){
    console.log("Error deleting drone")
  }
});
router.get('/drones/:id', async (req, res, next) =>{
  try{
    const {droneId} = req.params;
    let foundDrone = await Drone.findById({droneId});
    res.render('drones/list.hbs', {drone: foundDrone});
  }
  catch(err){
    console.log("Error finding drone")
  }
})

module.exports = router;
