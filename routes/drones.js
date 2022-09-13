const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
      console.log(drones);
      res.render("drones/list", { drones });
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
  const newDrone = new Drone({
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed,
  });

  newDrone
    .save()
    .then((drone) => {
      res.redirect("/drones");
    })
    .catch((err) => console.log(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form", drone);
    })
    .catch((err) => console.log(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  const newDrone = {
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed,
  };

  Drone.findByIdAndUpdate(req.query.id, newDrone)
    .then((drone) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
      Drone.findById(req.params.id)
        .then((drone) => {
          res.render("drones/update-form", drone);
        })
        .catch((err) => console.log(err));
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndRemove(req.params.id)
    .then((drone) => {
      console.log("Deleted: " + drone);
      res.redirect("/drones");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
