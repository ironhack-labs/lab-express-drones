const express = require('express');
const router = express.Router();
const DroneModel = require("../models/Drone.model")
// require the Drone model here

router.get('/drones', (req, res, next) => {
  DroneModel.find()
  .then((drones) => {
    res.render("drones/list.hbs", {drones})
  })
  .catch(() => {
    next("failed")
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // GETTING THE DATA FROM THE USE
  const {name, propellers, maxSpeed} =  req.body;
  // adding to the MONGO DB COMPASS
  DroneModel.create({ name, propellers, maxSpeed})
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      res.render('/drones/create-form.hbs')
      // -- res.render("/")
      // if you use next in the catch --- next() =>>>>>
      // next("fail")
    })
  // Iteration #3: Add a new drone
  
  // ... your code here
});

  router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id

  DroneModel.findById(id)
    .then((drone) => {
      res.render('drones/update-form.hbs', {drone})
    })
    .catch(() => {
      res.redirect('/drones')
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id
  const { name, propellers, maxSpeed } = req.body
  
  DroneModel.findByIdAndUpdate(id,  { name, propellers, maxSpeed })
  .then(() => {
    res.redirect('/drones')
  })
  .catch(() => {
    res.render('drones/update-form.hbs', {drone})
  })
  // Iteration #4: Update the drone
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  let id = req.params.id
  DroneModel.findByIdAndDelete(id)
  .then(() => {
    res.redirect("/drones")
  })
  .catch(() => {
    next("Deleting failed")
  })
  
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
