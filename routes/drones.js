const express = require("express");
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model");

router.get("/drones", (req, res) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((allDronesFromDB) => {
      console.log(allDronesFromDB);
      res.render("drones/list", { drones: allDronesFromDB });
    })
    .catch((err) => console.log("Something went wrong", err));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.create({ name, propellers, maxSpeed })
    .then((createdDrone) => {
      console.log("Created Drone: ", createdDrone);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something went wrong creating a new drone", err);
      res.render("drones/create-form");
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
