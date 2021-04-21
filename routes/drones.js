const express = require('express');
const Drone = require("../models/Drone.model");
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
  .then(drones => {
    console.log(drones)
    res.render("drones/list", {drones});
  })
  .catch((error) => console.error(error));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed})
  .then(() => {
    res.redirect("/drones")
  })
  .catch((error) => res.render("drones/create"), { error })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  Drone.findById(id)
  .then((drone) => {
    res.render("drones/update-form", drone)
  })
  .catch((error) => console.error(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const { name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then (() => {
    res.redirect("/drones")
  })
  .catch((error) => console.error(error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;
  Drone.findByIdAndRemove(id)
  .then((drone) => {
    res.redirect("/drones")
  })
  .catch((error) => console.error(error))
});


module.exports = router;
