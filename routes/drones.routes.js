const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => res.render("drones/list", { drones }))
    .catch((error) => {
      console.error("error when getting drones data", error);
      next(error);
    });
});

router.get("/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => {
      console.error("error when creating drone data", error);
      next(error);
    });
});

router.get("/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form", drone);
    })
    .catch((error) => {
      console.error("error when getting drone", error);
      next(error);
    });
});

router.post("/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => {
      console.error("error when updating drone data", error);
      next(error);
    });
});

router.post("/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
