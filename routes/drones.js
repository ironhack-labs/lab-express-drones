const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");
const DroneModel = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((data) => {
      const droneChar = {
        drones: data,
      };
      res.render("drones/list", droneChar);
    })
    .catch((err) => {
      console.log("Drones, I cannot see them");
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
      console.log("no more drones today, we're closed");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drone.findById(id)
    .then((data) => {
      res.render("drones/update-form.hbs", data);
    })
    .catch((err) => {
      console.log("ops, can't find that drone");
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const editDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(editDrone)
    .then((editDrone) => {
      res.redirect("/drones");
    })
    .catch((e) => {
      console.log("error updating the drone");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then((id) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Ops, something wrong happen");
    });
});

module.exports = router;
