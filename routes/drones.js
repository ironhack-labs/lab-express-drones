const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const drones = await Drone.find()
    console.log(drones);
    res.render("drones/list", {drones})
  } catch (error) {
    
  }
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    //get data from body
    const newDrone = req.body
    //write in database
    await Drone.create(newDrone)
    res.redirect("/drones")
  } catch (error) {
    console.log(`Error: ${error}`);
    res.redirect("/create")
  }
});

router.get('/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneData = await Drone.findById(req.params.id)
  res.render("drones/update-form", {droneData})
});

router.post('/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    //get data from body
    const newDrone = req.body
    //write in database
    await Drone.findByIdAndUpdate(req.params.id, newDrone)
    res.redirect("/drones")
  } catch (error) {
    console.log(`Error: ${error}`);
    res.redirect("/drones")
  }
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
