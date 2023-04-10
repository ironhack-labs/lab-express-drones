const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await DroneModel.find();
    res.render("drones/list",{allDrones} );
  }
  catch (error){console.log("There was an error: ", error)}
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
      res.render("drones/create-form");
    }
  catch (error){console.log("There was an error: ", error)}
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const newDrone = await DroneModel.create(req.body);
    res.redirect("/drones");
  }
  catch (error){console.log("There was an error: ", error)}
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params;
    const editedDrone = await DroneModel.findById(id);
    res.render("drones/update-form", editedDrone );
  }
  catch (error){console.log("There was an error: ", error)}
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params;
    await DroneModel.findByIdAndUpdate(id, req.body, {new: true});
    res.redirect("/drones");
  }
  catch (error){console.log("There was an error: ", error)}
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const {id} = req.params;
    await DroneModel.findByIdAndDelete(id);
    res.redirect("/drones");
  }
  catch (error){console.log("There was an error: ", error)}
});

module.exports = router;
