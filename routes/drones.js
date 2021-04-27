const express = require("express");

// require the Drone model here
const Drone = require("../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find({})
    .then((result) => {
      console.log(result);
      res.render("drones/list", { drone: result });
    })
    .catch((error) => {
      console.log("No drones to show", error);
      //next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
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
