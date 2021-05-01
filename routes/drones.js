const express = require("express");

// require the Drone model here
const Drone = require("../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find({})
    .then((dronesArray) => {
      res.render("drones/list", { drones: dronesArray }); // if the value i pass to the view is the sa me i used to the then promise, dronesArray, only noe value
    })
    .catch((error) => {
      console.log("No drones to show", error);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");

  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  // Drone.create ({
  // name: name,
  // propellers: propellers,
  // maxSpeed: maxSpeed,
  // })
  Drone.create({ name, propellers, maxSpeed }) // same as above, this one has been destructured
    .then((newDrone) => {
      console.log("New Drone created", newDrone);
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("No drone created", error);
      res.render("drones/create-form");
      //next(error);
    });
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((foundedDrone) => {
      //console.log("Drone Updated", foundedDrone);
      res.render("drones/update-form", foundedDrone);
    })
    .catch((error) => {
      console.log("No drones to show", error);
    });
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  //const name = req.body.name
  //const propelers = req.body.propellers
  //const maxSpeed = req.body.maxSpeed
  const { name, propellers, maxSpeed } = req.body; // same as above, this is the destructured form
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((updateDrone) => {
      console.log("Drone Updated", updateDrone);
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("No drones to show", error);
      res.render("drones/update-form");
    });

  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
