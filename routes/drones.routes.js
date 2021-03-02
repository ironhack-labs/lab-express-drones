const express = require("express");

// require the Drone model here
const DroneModel = require("./../models/Drone.model");
const router = express.Router();

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await droneModel.find();
    res.render("drones/list", { drones, title: "Drones" });
  } catch (err) {
    next(err);
  }
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const newDrone = await DroneModel.create(req.body);
    res.redirect("drones");
  } catch (error) {
    next(error);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const editableDrone = await DroneModel.findById(req.params.id);
    res.render("drones/update-form", editableDrone);
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const editedDrone = await DroneModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await droneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    console.log(error);
  }
});

module.exports = router;
