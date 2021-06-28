const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  const dronesList = await DroneModel.find()
  console.log(dronesList)
  res.render("drones/list", {dronesList})
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', async (req, res, next) => {
  try{
    const {name, propellers, maxSpeed} = req.body
    await DroneModel.create({name, propellers, maxSpeed})
    res.redirect("/drones")
  }
  catch(e){
    res.redirect("/drones/create")
  }

});

router.get('/drones/:id/edit', async (req, res, next) => {
  const dronesEdit = await DroneModel.findById(req.params.id)
  res.render("drones/update-form", dronesEdit)
});

router.post('/drones/:id/edit', async (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  console.log("Id:", req.params.id)
  await DroneModel.findByIdAndUpdate(req.params.id, {
    name,
    propellers,
    maxSpeed
  })
  res.redirect("/drones")
});

router.post('/drones/:id/delete', async (req, res, next) => {
  await DroneModel.findByIdAndDelete(req.params.id)
  res.redirect("/drones")
});

module.exports = router;
