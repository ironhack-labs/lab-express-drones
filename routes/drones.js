const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then(droneArr => {
      //console.log(droneArr);
      res.render("drones/list", { droneArr });
    })
    .catch((e) => {
      console.log("error getting drone from DB", e);
      next(e);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(droneDetails)
    .then( droneFromDB => {
      res.redirect("/drones");
    })
    .catch((e) => {
      console.log("error creating new drone", e);
      next(e);
    });
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
