const express = require('express');

// require the Drone model here
const DroneModel = require("./../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then((dronesList) => res.render("drones/list", { title: "Drnz - All the drones", drones: dronesList }))
  .catch(next);
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form", { title: "Drnz - Add a new drone" });
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.create({
    name,
    propellers,
    maxSpeed
  })
  .then(() => {
    console.log("New drone successfully added to the DB!");
    res.redirect("/drones");
  })
  .catch(next);
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
  .then(selectedDrone => {
    console.log(selectedDrone.name);
    res.render("drones/update-form", { title: "Drnz - Update an existing drone", drone: selectedDrone });  
  }).catch(next);
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, {
    name,
    propellers,
    maxSpeed
  })
  .then(() => {
    console.log("Drone successfully updated!");
    res.redirect("/drones");
  })
  .catch(err => {
    res.render("/drones/:id/edit"); 
    next(err);
  });
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log("Drone successfully deleted!");
    res.redirect("/drones");
  })
  .catch(err => next(err));
});

module.exports = router;
