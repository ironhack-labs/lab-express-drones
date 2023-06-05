const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone

  const { id } = req.params;

  Drone.findById(id)
    .then((droneFromDB) => {
      console.log(droneFromDB);
      res.render("drones/update-form", droneFromDB);
    })
    .catch((error) => {
      console.log(`There was an error updating the drone: ${error}`);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone

  const { id } = req.params;

  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((updatedDrone) => {
      //res.redirect(`/drones/${updatedDrone.id}`);
      res.redirect(`/drones`);
    })
    .catch((error) => {
      console.log("Error updating the drone with error:", error);
      res.redirect(`/drones/${id}/edit`);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((error) => console.log("Error deleting Drone", error));
});

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((dronesArr) => {
      console.log(dronesArr);
      res.render("drones/list", { dronesArr });
    })
    .catch((e) => {
      console.log("error finding drones in the DB", e);
      next(e);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(newDrone)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((e) => {
      console.log("Failed to create new drone", e);
      res.render("drones/create-form");
    });
});

module.exports = router;
