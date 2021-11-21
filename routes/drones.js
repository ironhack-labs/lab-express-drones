const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const allDrones = await Drone.find();
    console.log(allDrones);
    res.render("drones/list", { allDrones });
  } catch (error) {
    console.error(`Error while trying to list all drones: ${error}`);
  }
});

router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    res.render("drones/create-form");
  } catch (error) {
    console.error(`Error while routing to create-form-hbs: ${error}`);
  }
});

router.post("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    const newDrone = req.body;
    await Drone.create(newDrone);
    res.redirect("/");
  } catch (error) {
    console.error(`Error while adding new Drone to DB: ${error}`);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const droneId = req.params.id;
    const droneToEdit = await Drone.findById(droneId);
    res.render("drones/update-form", { droneToEdit });
  } catch (error) {
    console.error(`Error while routing to update-form-hbs: ${error}`);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const droneId = req.params.id;
    const newDrone = req.body;
    const droneToEdit = await Drone.findByIdAndUpdate(droneId, newDrone);
    res.redirect("/");
  } catch (error) {
    console.error("Error while updating drone", error);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const droneId = req.params.id;
    await Drone.findByIdAndRemove(droneId);
    res.redirect("/");
  } catch (error) {
    console.error("Error while trying to delete Drone from DB.", error);
  }
});

module.exports = router;
