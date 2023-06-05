const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesDB) => {
      const data = {
        drones: dronesDB,
      };
      res.render("drones/list", data);
    })
    .catch((err) => {
      console.log(`Error catching list ${err}`);
      next(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

  Drone.create(newDrone)
    .then((newDrone) => {
      res.redirect("/drones");
    })
    .catch((e) => {
      console.log("error creating new drone", e);
      next(e);
    });
});

router.get("/drones/:droneId/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;

  Drone.findById(droneId)
    .then((editDrone) => {
      res.render("drones/update-form", { drone: editDrone });
    })
    .catch((error) => next(error));
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
    .then(() => res.redirect(`/drones/`))
    .catch((error) => next(error));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
