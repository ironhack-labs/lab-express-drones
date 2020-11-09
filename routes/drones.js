const express = require('express');
const Drone = require('../models/Drone.model')


// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
        .then((drones) => {
          res.render("drones/list", { drones })
        })
        .catch((err) => console.log(`Could not render /drones path: ${err}`))
});

router.get('/drones/create', (req, res, next) => res.render("drone-create"));

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((err) => console.log(`Could not render the creation of the drone: ${err}`))
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
