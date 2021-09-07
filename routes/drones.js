const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
    .then((allTheDronesFromDB) =>
      res.render("drones/list", { drones: allTheDronesFromDB })
    )
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
    .then((data) => {
      console.log(data);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err.message);
      res.render("drones/create-form");
    });
});

router.get("/drones/:id/update", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((droneFromDb) =>
      res.render("drones/update-form", { id, drone: droneFromDb })
    )
    .catch((err) => next(err));
});

router.post("/drones/:id/update", (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  const { id } = req.params;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(res.redirect("/drones"))
    .catch((err) => {
      console.log(err.message);
      res.render("drones/update-form");
    });
});

router.post("/drones/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.body;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

module.exports = router;
