const express = require("express");

// require the Drone model here
const Drone = require("../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find({})
    .then((dronesArray) => {
      res.render("drones/list", { drones: dronesArray });
    })
    .catch((error) => {
      console.log("No drones to show", error);
      //next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");

  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, speed } = req.body;
  Drone.create({ name, propellers, speed })
    .then((newDrone) => {
      res.redirect("drones/list", { newDrone: newCreatedDrone });
    })
    .catch((error) => {
      console.log("No drone created", error);
      res.render("drone/create-form");
      //next(error);
    });
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
