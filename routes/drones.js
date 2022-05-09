const express = require("express");

const router = express.Router();

const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find({})
    .then((drones) => {
      res.render("drones/list", { drones });
    })
    .catch((err) => next(err));
  // Iteration #2: List the drones
  // ... your code here
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  console.log(req.body);
  const { name, img, propellers, maxSpeed, takeoffWeight, diagonalLength, maxFlightTime } = req.body;
  Drone.create({
    name,
    img,
    propellers,
    maxSpeed,
    takeoffWeight,
    diagonalLength,
    maxFlightTime,
  })
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      res.render("drones/update-form", drone);
    })
    .catch((err) => next(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const {
    name,
    img,
    propellers,
    maxSpeed,
    takeoffWeight,
    diagonalLength,
    maxFlightTime,
  } = req.body;
  Drone.findByIdAndUpdate(id, {
    name,
    img,
    propellers,
    maxSpeed,
    takeoffWeight,
    diagonalLength,
    maxFlightTime,
  })
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  Drone.findByIdAndRemove(id)
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

module.exports = router;
