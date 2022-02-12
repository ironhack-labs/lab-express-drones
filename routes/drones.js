const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  return Drone.find().then((drones) => {
    res.render("drones/list", { drones });
  });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const drone = req.body;
  Drone.create(drone)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(`Some ${err}`);
      res.render("drones/create");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const _id = req.params.id;
  res.render("drones/update-form", { _id });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const updatedDetails = req.body;
  const id = req.params.id;

  Drone.updateOne({ _id: id }, updatedDetails).then((updatedDrone) => {
    res.redirect("/drones");
  });
});

router.post("/drones/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Drone.deleteOne({ _id: id }).then((deleted) => {
    console.log(deleted);
    res.redirect("/drones");
  });
});

module.exports = router;
