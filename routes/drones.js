const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try { 
    const drones = await Drone.find()
    console.log(drones)
    res.render("drones/list", { drones })
   
  } catch (error) {
    res.send(error)
  }

});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render("drones/create-form")
  } catch (error) {
    res.send(error)
  }
});

router.post("/drones/create", async (req, res, next) => {
  try {
    await Drone.create(req.body)
    res.redirect("/drones")
  } catch (error) {
    res.redirect("/drones/create");
  }
})


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
