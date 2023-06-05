const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesFromDB) => {
      const data = {
        drones: dronesFromDB,
      };
      // res.send("resquest from /drones");
      res.render("drones/list", data);
    })
    .catch((e) => {
      console.log("Theres an error to show drones list", e);
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
      console.log("Theres an error while creating new drone", e);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  Drone.findById(droneId)

    .then((droneToEdit) => {
      res.render("drones/update-form", droneToEdit);
    })
    .catch((e) => {
      console.log("Theres an error while editing drone", e);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    droneId,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then((updatedDrone) => res.redirect(`/drones`)) // go to the details page to see the updates
    .catch((e) => {
      console.log("Theres an error while updating drone to the db", e);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.id;

  Drone.findByIdAndDelete(droneId)
    .then(() => res.redirect("/drones"))
    .catch((e) => {
      console.log("Theres an error while updating drone to the db", e);
    });
});

module.exports = router;
