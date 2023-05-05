const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((dronesArray) => {
      res.render('list', { dronesArray })
    })
    .catch(error => {
      console.log('Error getting drones from DB');
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... render drone form
  Drone
    .find()
    .then(drones => res.render("create-form", { drones }))
    .catch(err => console.log(err))

});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body;

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("Error while creating a new drone.");
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    req.params.id,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then((updatedDrone) => {
      res.redirect(`/drones`);
    }) // go to the details page to see the updates
    .catch((error) => {
      res.render("drones/update-form", { drone: req.body });
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params
  console.log(id)

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

module.exports = router;
