const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
      .find()
      .then(drones => {
        res.render("drones/list", {drones})
      })
      .catch(err => console.log(err))
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed} = req.body

  Drone
    .create({ name, propellers, maxSpeed})
    .then(() => {
      res.redirect("/drones")
    })
    .catch(err => console.log(err))
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

  const { id } = req.params
  Drone 
    .findById(id)
    .then(drone => {
      console.log(drone)
      res.render("drones/update-form", drone)
    })
    .catch(err => console.log(err))
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => {
      res.redirect("/drones")
    })
    .catch(() => {
      res.render("drones/update-form")
    })
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params

  Drone
      .findByIdAndDelete(id)
      .then(() => {
        res.redirect("/drones")
      })
      .catch(err => console.log(err))
  // ... your code here
});

module.exports = router;
