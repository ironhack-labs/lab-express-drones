const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  const drones = await Drone.find().sort({title: 1}); //-> ordem alfabética
  res.render('drones/list', {drones});
});

router.get('/drones/create', (req, res, next) => {
  console.log('create');
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({ //create -> mongoose
    name,
    propellers,
    maxSpeed,
});
res.redirect("/drones");  
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
    const droneToEdit = await Drone.findById(req.params.droneId);
    console.log(droneToEdit);
    res.render("drones/update-form", droneToEdit);
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  await Drone.findByIdAndUpdate(req.params.droneId, {
    name,
    propellers,
    maxSpeed,
  });
  res.redirect('/drones');
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  await Drone.findByIdAndRemove(req.params.droneId);
  res.redirect('/drones');
});

module.exports = router;
