const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find().then((drones) => {
    res.render("drones/list", { drones });
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
    .then(res.redirect("/drones"))
    .catch((error) => next(error));
});

router.get("/drones/:droneId/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;

  Drone.findById(droneId).then((drone) => {
    res.render("drones/update-form", { drone });
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
    .then(() => {
      res.redirect("/drones");
    })
    .catch((error) => next(error));
});

router.post("/drones/:droneId/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { droneId } = req.params;
  console.log(droneId)

  Drone.findByIdAndDelete(droneId)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((error) => next(error));
});

module.exports = router;
