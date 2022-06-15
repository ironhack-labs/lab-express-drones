const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
      res.render("drones/list", { drones });
    })
    .catch((error) => {
      console.log("error", error);
      next();
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then((drones) => {
      res.render("drones/list", drones);
    })
    .catch((error) => {
      console.log("error en '/create'", error);
      next();
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { _id } = req.params;
  Drone.findById(_id)
    .then((drones) => {
      res.render("drones/update-form", drones);
    })
    .catch((error) => {
      console.log("error en /edit", error);
      next();
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { _id } = req.params;
  const { name, propellers, value } = req.body;

  Drone.findByIdAndUpdate(_id, { name, propellers, value }, { new: true })
    .then((updatedDrones) => {
      res.render("drones/index", { isEdit: true, ...updatedDrones.toObject() });
    })
    .catch((error) => {
      console.log("error en /edit", error);
      next();
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { _id } = req.params;
  Drone.findByIdAndDelete(_id)
    .then(() => {
      res.render("drones/index");
    })
    .catch((error) => {
      console.log("error en delete", error);
      next();
    });
});

module.exports = router;
