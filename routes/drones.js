const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model.js");

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  try{
    let allDronesFromDb = await Drone.find();
    res.render("drones/list.hbs", {drones: allDronesFromDb})
  }
  catch (error) {
    console.log(error)
  }
});

router.get('/drones/create', (req, res, next) => {
    res.render("drones/create-form.hbs")
});

router.post('/drones/create', async (req, res, next) => {
  try{
    const {name, propellers, maxSpeed} = req.body;

    await Drone.create({name, propellers, maxSpeed});
    res.redirect("/drones");
  } 
  catch (error){
    console.log(error);
    res.render("drones/create.hbs")
  }
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  try{
    const {droneId} = req.params;
    let foundDrone = await Drone.findById(droneId);
    res.render("drones/update-form.hbs", {drones: foundDrone});
  }
  catch (error){
    console.log(error);
  }
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  try{
    const {droneId} = req.params;
    const {name, propellers, maxSpeed} = req.body;

    await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true});
    
    res.redirect("/drones");
  }
  catch(error) {
    console.log(error);
  }

});

router.post('/drones/:droneId/delete', async (req, res, next) => {
try{
  const {droneId} = req.params;
  await Drone.findByIdAndDelete(droneId);

  res.redirect("/drones")
}
catch(error){
  console.log(error);
}
});

module.exports = router;
