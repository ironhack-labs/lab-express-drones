const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    // get all drones from our Database via .find() method
    let allDronesFromDB = await Drone.find();

    res.render('drones/list.hbs', {drones: allDronesFromDB});
    console.log(allDronesFromDB)
  }
  catch (error) {
      console.log('Error while getting drones', error);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form.hbs');
});


router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    // Object destructuring with req.body
    // There's always a match between an input's name and a req.body property's name
    const {name, propellers, maxSpeed} = req.body;

    await Drone.create({name, propellers, maxSpeed});
    res.redirect('/drones');
  }
  catch (error) {
      console.log(error);
  }
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {droneId} = req.params;
    
    let foundDrone = await Drone.findById(droneId);

    res.render('drones/edit-form.hbs', {drone: foundDrone});
  }
  catch (error) {
      console.log(error);
  }
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    // Destructuring the req.params object to get the bookId
    const {droneId} = req.params;
    
    const {name, propellers, maxSpeed} = req.body;

    // Update the same document with new info
    await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true});

    res.redirect('/drones');
}
catch (error) {
    console.log(error);
}
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const {droneId} = req.params;

    await Drone.findByIdAndDelete(droneId);

    res.redirect('/drones');
}
catch (error) {
    console.log(error)
}
});

// Get route to display info about a specific drone
router.get('/drones/:droneId', async (req, res, next) => {
  try {
      // ES6 object Destructuring with bookId route param
      const {droneId} = req.params;

      // Find drone via its Id inside the Db
      let foundDrone = await Drone.findById(droneId);

      res.render('drones/list', {drone: foundDrone});
  }
  catch (error) {
      console.log(error);
  }
});

module.exports = router;
