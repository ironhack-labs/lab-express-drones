const express = require("express");
const router = express.Router();

// require the Drone model here
const Drones = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drones.find()
    .then((foundDrones) => {
      res.render("drones/list.hbs", { drones: foundDrones });
    })
    .catch((error) => {
      console.log(`couldn't get drones ${error}`);
      next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  Drones.create({ name, propellers, maxSpeed })
    .then((createdDrone) => {
      console.log("created this drone: " + createdDrone);
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log(error);
      next(error);
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
