const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  try {
    let drones = await Drone.find();
    res.render("drones/list", {drones})
  } catch (error) {
    console.log(error)
  }
});

router.get('/drones/create', (req, res, next) => { res.render("drones/create-form")
});

router.post('/drones/create', async (req, res, next) => { 
  try {
    await Drone.create(req.body)
    res.redirect("/drones")

  } catch (error) {
    console.log(error)
    res.render("/drones/create-form")
  }
 
});

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    let drone = await Drone.findById(req.params.id)
    res.render('drones/update-form', drone)
  } catch (error) {
    console.log(error);
    res.render("/not-found");
  }
});

router.post('/drones/:id/edit', async (req, res, next) => { 
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/drones")
} catch (error) {
  console.log(error);
  res.render("/not-found")
}
  
  
});

router.post('/drones/:id/delete', async (req, res, next) => {
 try {
  await Drone.findByIdAndRemove(req.params.id)
  res.redirect("/drones")
 } catch (error) {
  console.log(error)
 }
});

module.exports = router;
