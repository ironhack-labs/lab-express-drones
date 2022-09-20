const express = require("express");
const router = express.Router();

// require the Drone model here
const { Drone } = require("../models/Drone.model");

router.get("/", async (req, res, next) => {
  // Iteration #2: List the drones
  const allDrones = await Drone.find();
  res.render("drones/list", { allDrones });
});

router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  try {
    const newDrone = new Drone({ ...req.body });
    await newDrone.save();
    res.redirect("/drones");
  } catch (err) {
    console.log("Sorry, there was an error", err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    console.log("test");
    console.log(req.params.id);
    const droneToUpdate = await Drone.findById(req.params.id);
    console.log(droneToUpdate);
    res.render("drones/update-form", { drone: droneToUpdate });
  } catch (err) {
    console.log("Sorry, there was an error", err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    console.log(req.body);
    console.log(req.params)
    const { name, propellers, maxSpeed } = req.body;
    const editedDrone = await Drone.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    console.log("Sorry, there was an error", err);
    res.redirect("/drones");
  }
});

router.post("/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneToDelete = await Drone.findByIdAndDelete(req.params.id);
  res.redirect("/drones");
});

module.exports = router;
