const express = require("express");
const Drone = require("./../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((allDronesFromDb) => {
      res.render("drones/list", { allDronesFromDb });
    })
    .catch((err) => console.error(err));
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const newDrone = req.body;
  Drone.create(newDrone)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  Drone.find({ _id: req.params.id })
    .then((singleDrone) => {
      res.render("drones/update-form", { singleDrone });
    })
    .catch();
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: name, propellers: propellers, maxSpeed: maxSpeed } }
  )
    .then(() => res.redirect("/drones"))
    .catch((err) => console.error(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
