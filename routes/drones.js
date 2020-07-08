const express = require('express');
const Drones = require('../models/Drone.model')
const router = express.Router();

router.get('/drones', async (req, res, next) => {
  try{
    const droneList = await Drones.find()
    // res.render('/drones/list', {drones: droneList})
    res.send({droneList})
  }catch(err){
    throw new Error(err)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
