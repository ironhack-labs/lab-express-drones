const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  const droneList = Drone.find()
    .then()
    .catch((err) => {
      console.log("Error occured while finding the drones", err);
    });
  res.render("drones/list", { drones: droneList });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drone/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const drone = req.body;
  Drone.create(drone)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Error occured while creating the drone", err);
      res.redirect("drones/create");
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
