const express = require("express");
const Drone = require("../models/Drone.model");
// require the Drone model here

const router = express.Router();

router.get("/drones", (req, res, next) => {
  Drone.find({})
    .then((drones) => res.render("drones/list", { drones }))
    .catch((err) => console.err("Something went wrong!"));
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then((message) => console.log(message), res.redirect("/drones"))
    .catch((err) => console.err(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => res.render("drones/update-form", { drone }))
    .catch((err) => console.error("Something went wrong!"));
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  console.log("UPDATE ID: ", id);
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then((drone) => res.redirect("/drones"))
    .catch((err) => console.error("Something went wrong!"));
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then((message) => res.redirect("/drones"))
    .catch((err) => console.error(err));
});

module.exports = router;
