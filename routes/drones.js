const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

// Iteration #2: List the drones
router.get('/list', async (req, res, next) => {
    try {
    const allDrones = await Drone.find();
    res.render('drones/list',  { allDrones });
} catch(error) {
    console.log(error);
    next(); 
}
});

// Iteration #3: Add a new drone
router.get('/drones/create', (req, res, next) => res.render ("drones/create-form"));
  
router.post('/drones/create', async (req, res, next) => {
    try {
      const {name, propellers, maxSpeed} = req.body; 
      let createdDrone = await Drone.create({name, propellers, maxSpeed})
      res.redirect('/list');
  } catch (error) {
      console.log(error);
      next(error);
  }
});

  // Iteration #4: Update the drone
router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const drone = await Drone.findById(req.params.id);
    res.render("drones/update-form", drone)
  } catch (error)  {
    console.log(error);
    next(error);
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
try {
  const { id } = req.params
  const {name, propellers, maxSpeed} = req.body 
  const updatedDrone = await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed});
  res.redirect('/list');
} catch (error) {
  console.log(error);
  next(error);
}
});

// Iteration #5: Delete the drone
router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Drone.findByIdAndRemove(id)
    res.redirect('/list');
  } catch  (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
