const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

// GET all the drones from DB
router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dronesList) => {
      res.render("drones/list", { drone: dronesList });
    })
    .catch((e) => console.log("error getting list of drones from DB", e));
});

// GET add a new drone -> show a form to create a drone
router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

// POST add a new drone -> save a drone to the database
router.post("/drones/create", (req, res, next) => {
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(newDrone)
  .then((newDroneCreated) => {
    res.redirect("/drones");
  })
  .catch((e) => console.log("error getting list of drones from DB", e));
});


// GET update drone -> go to form
router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
  .then(droneToEdit => {
    res.render("drones/update-form", {drone: droneToEdit})
  })
  .catch((e) => console.log("error going to the edit page DB", e));
});

// POST update drone -> change the data in database after updating
router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
