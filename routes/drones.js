const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model");

router.get('/drones', async (req, res, next) => {
 try {
  let drones = await Drone.find();

  res.render("drones/list", {drones});
  
 } catch (error) {
    console.log(error)
    next(error)

 }
});

router.get('/drones/create', (req, res, next) => res.render("drones/create-form"));

router.post('/drones/create', async (req, res, next) => {
 try {
  const {name, propellers, maxSpeed} = req.body;
  await Drone.create({name, propellers, maxSpeed});
  res.redirect("/drones")
 } catch (error) {
  console.log(error)
  next(error)
  
 }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const {id} = req.params;
    const drones = await Drone.findById(id)
    res.render("drones/update-form", drones)
  } catch (error) { 
    console.log(error)
    next(error)
    
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
try {
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  
  res.redirect("/drones")
} catch (error) {
  console.log(error)
  next(error)
}
});

router.post('/drones/:id/delete', async (req, res, next) => {
 try {
  await Drone.findByIdAndDelete(req.params.id)
  res.redirect("/drones")
 } catch (error) {
  console.log(error)
  next(error)
 }
});

module.exports = router;
