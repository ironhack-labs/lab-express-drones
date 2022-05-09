const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
    .then((drones) => {
      //console.log(drones);
      res.render("drones/list", { drones });
    })
    .catch((err) => next(err));
});

router.get("/drones/:id/details", (req, res, next) => {
  // Iteration #2: List the drones
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      //console.log(drones);
      res.render("drones/details", drone);
    })
    .catch((err) => next(err));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch(() => next(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      res.render("drones/update-form", drone);
    })
    .catch((err) => next(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then((drone) => res.redirect(`/drones/`))
    .catch((err) => next(err));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findByIdAndRemove(id)
    .then(() => res.redirect("/drones"))
    .catch(() => next(err));
});

module.exports = router;
