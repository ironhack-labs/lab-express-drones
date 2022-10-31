const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try{
    const drones = await Drone.find()
        res.render("drones/list", {drones});
  } catch (error) {
    console.log(error);
        next(error);
  }
});

router.get('/drones/create', (req, res, next) => 
  // Iteration #3: Add a new drone
 res.render("drones/create-form")
);

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const {name, propellers, maxSpeed } = req.body;

    const createdDrones = await Drone.create({name, propellers, maxSpeed });
    console.log(createdDrones)
    res.redirect(`/drones`);
    
    }catch(error){
        console.log(error);
        next(error);
    }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const drone = await Drone.findById(req.params.id);
    res.render("drones/update-form", drone);
}catch (error) {

console.log(error);
next(error);
}
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params
    const {name, propellers, maxSpeed} = req.body;

    const updateDrone = await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed});

    res.redirect(`/drones`);
}catch (error){
    console.log(error);
    next(error);
}
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const {id} = req.params;
    await Drone.findByIdAndRemove(id);
    res.redirect("/drones");
}catch {
    console.log(error);
    next(error);
}
});

module.exports = router;
