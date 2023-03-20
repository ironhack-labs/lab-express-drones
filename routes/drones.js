const express = require("express");
const { findByIdAndDelete } = require("../models/Drone.model");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesArr) => {
      const data = {
        drones: dronesArr,
      };
      res.render("drones/list", data);
    })
    .catch((e) => {
      console.log("Error to display list of drones", e);
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
    .then(() => {
      res.redirect("/drones");
    })
    .catch((e) => {
      console.log("Error to display list of drones", e);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then(droneFromDb=>{
    res.render("drones/update-form",droneFromDb);
  })
  .catch((e) => {
    console.log("Error to display list of drones", e);
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.findByIdAndUpdate(req.params.id,newDrone)
  .then(()=>{
    res.redirect("/drones")
  })
 
  .catch((e) => {
    console.log("Error to display list of drones", e);
  });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect("/drones")
  })
  .catch((e) => {
    console.log("Error to display list of drones", e);
  });

});

module.exports = router;
