const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try{
    //Getting info from our DB with .find() method
    let allDronesFromDb = await Drone.find();

    res.render('drones/list.hbs', {drones: allDronesFromDb})
}
catch(error){
    console.log(error)
}
});




router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    //object destructuring with req.body, the variables created are the names of input in the form with hbs extension
    const {name, propellers, maxSpeed} = req.body;
    console.log(name)
    await Drone.create({name, propellers, maxSpeed})
    res.redirect('/drones');
    }
    catch(err){
        console.log(err)
    }
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const {droneId} = req.params;
    let foundDrone = await Drone.findById(droneId);
    res.render('drones/update-form.hbs', {drones: foundDrone})
}
catch (error){
    console.log(error)
}
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const {droneId} = req.params;
    const {name, propellers, maxSpeed} = req.body;
    await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true});
    res.redirect('/drones');
}
catch (error){
    console.log(error)
}
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try{
    const {droneId} = req.params;
    await Drone.findByIdAndDelete(droneId);
    res.redirect('/drones')
  }
  catch(error){console.log(error)}
});

module.exports = router;
