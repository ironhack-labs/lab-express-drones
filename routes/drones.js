const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");
// Iteration #2: List the drones
router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((drones) => {
      console.log("Displaying the drones works! yay!", drones);
      res.render("drones/list", { drones });
    })
    .catch((error) => {
      console.log("Error displaying drones", error);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed,
  })
    .then(() => {
      console.log("drone succesfully created");
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("Error while creating the new drone", error);
      res.redirect("/drones/create");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((droneEdit) => {
      console.log("Drone has been edited", droneEdit);
      res.render("drones/update-form", droneEdit);
    })
    .catch((error) => {
      console.log("There is an error", error);
      res.redirect("/drones");
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((result) => {
      console.log("Drone succesfully updated", result);
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("There is an error while editing the drone", error);
      res.render("drones/update-form");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("Drone succesfully deleted");
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("Error trying to delete drone", error);
      res.redirect("/");
    });
});

module.exports = router;
