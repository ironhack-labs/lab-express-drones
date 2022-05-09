const express = require("express");
const DroneModel = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find({})
    .then((drone) => {
      res.render("drones/list", { drone });
    })
    .catch((err) => console.log(err));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  DroneModel.findById(id)
    .then((drone) => {
      res.render("drones/update-form", drone);
    })
    .catch((err) => next(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch((err) => next(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  DroneModel.findByIdAndRemove(id)
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

module.exports = router;
