const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find()
    .then((dronesArray) => {
      res.render("drones/list", { dronesArray });
    })
    .catch((error) => {
      console.log("Error getting drones from DB");
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
  console.log(req.body);

  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then((droneFromDB) => {
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("Error while creating a new drone.");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  Drone.findById(req.params.id)
    .then((droneFromDB) => {
      res.render("drones/update-form", { drone: droneFromDB });
    })
    .catch((error) => {
      console.log("Problems finding drone by ID.");
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    req.params.id,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then((updatedDrone) => {
      console.log(updatedDrone);
      res.redirect(`/drones`);
    }) // go to the details page to see the updates
    .catch((error) => {
      console.log("Issues updating this drone!");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  console.log(req.params.id);
  Drone.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

module.exports = router;
