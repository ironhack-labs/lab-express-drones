const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDrones) => {
      // console.log(allDrones);
      res.render("drones/list", { drones: allDrones });
    })
    .catch((error) => {
      console.log(`Ups, some problem retrieving the drones -> ${error}`);
      next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then((dronesFromDB) => {
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log(`It seems that you suck at creating drones -> ${error}`);
      next(error);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drone.findById(id).then((droneFromDB) => {
    res.render("drones/update-form", { drone: droneFromDB });
  });
});

router.post("/drones/:droneId/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    droneId,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then((updatedDrone) => {
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log(`Some problem while updating the drone -> ${error}`);
      next(error);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
