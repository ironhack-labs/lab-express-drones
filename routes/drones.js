const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");
const mongoose = require('mongoose');

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((results) => res.render("drones/list", { results }))
    .catch((err) => console.log(err));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, speed } = req.body;
  Drone.create({
    name: name,
    propellers: propellers,
    speed: speed,
  })
    .then((result) => {
      console.log("CREATED NEW DRONE CALLED", name);
      res.redirect("/drones");
      // mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      res.render("drones/create-form");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((result) => {
      res.render("drones/update-form", { result });
      // mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      res.redirect("back");
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id, name, propellers, speed } = req.body;
  Drone.findOneAndUpdate(
    { id: id },
    { name: name, propellers: propellers, maxSpeed: speed },
    { new: true }
  )
    .then((result) => {
      res.redirect("/drones");
      console.log('Updated drone with (new) name', name);
      // mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      res.redirect("back");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findOneAndDelete(id)
    .then((result) => {
      console.log("Removed drone with name", result.name);
      res.redirect("/drones");
      // mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      res.redirect("back");
    });
});

module.exports = router;
