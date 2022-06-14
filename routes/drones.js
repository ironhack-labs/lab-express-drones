const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((data) => {
      console.log(data);
      res.render("drones/list", { drones: data });
    })

    .catch((error) => {
      console.log("Error", error);
      next();
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.find()
    .then((data) => {
      console.log("A new Drone has been created: ", data);
      res.render("drones/create-form", { drones: data });
    })

    .catch((error) => {
      console.log("Error", error);
      next();
    });
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then((drone) => {
      res.render("drones/success", drone);
    })
    .catch((error) => {
      console.log("Error", error);
      next();
    });
});

router.get("/drones/:_id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { _id } = req.params;
  Drone.findById(_id)
    .then((drone) => {
      res.render("drones/update-form", drone);
    })
    .catch((error) => {
      console.log("error:", error);
      next();
    });
});

router.post("/drones/:_id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { _id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(_id, { name, propellers, maxSpeed }, { new: true })
    .then((updatedDrone) => {
      res.render("index", { ...updatedDrone.toObject(), isEdit: true });
    })
    .catch((error) => {
      console.log("error:", error);
      next();
    });
});

router.get("/drones/:_id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { _id } = req.params;
  Drone.findByIdAndDelete(_id)
    .then(() => {
      res.render("index");
    })
    .catch((error) => {
      console.log("error;", error);
      next();
    });
});
module.exports = router;
