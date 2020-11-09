const express = require('express');

const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then((allDrones) =>
      res.render('drones/list', {
        allDrones
      })
    )
    .catch((error) => `An error occurred when loading ${error}`)
});

router.get("/drones/create", (req, res) => res.render("drones/create-form"));

router.post('/drones/create', (req, res, next) => {
  const {
    name,
    propellors,
    maxSpeed
  } = req.body;

  Drone.create({
      name,
      propellors,
      maxSpeed
    }).then(() => res.redirect("/drones"))
    .catch((error => {
      `An error occurred while creating ${error}`,
      res.render('drones/create-form')
    }))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;