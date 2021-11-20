const express = require('express');
const droneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  droneModel.find()
    .then((drones) =>{
      console.log(drones);
      res.render("drones/list", {drones})
    })
    .catch((err) => {
      console.log(err)
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  droneModel.create({name, propellers, maxSpeed})
  .then((drones) => {
    console.log(drones)
    res.redirect("/drones")
  })
  .catch((err) => {
    console.log(err)
    res.render("drones/create-form")
  })
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.droneId;
  const drone = await droneModel.findById(droneId);
  res.render("drones/update-form.hbs");
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id
  const {name, propellers, maxSpeed} = req.body
  droneModel.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new:true})
  .then(() => {
    res.render("/drones/:id/edit")
  })
  .catch((err) => {
    console.log(err)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.id

  droneModel.findByIdAndDelete(droneId)
  .then(() =>{
    res.redirect("/drones")
  })
});

module.exports = router;
