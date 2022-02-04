const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res) => {
  try {
    const allDrones = await Drone.find({});
    // console.log(allDrones);
    res.render("drones/list", {
      data: allDrones,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/drones/create", async (req, res) => {
  try {
    res.render("drones/create-form");
  } catch (error) {
    console.log(error);
  }
});

router.post("/drones/create", async (req, res) => {
  console.log("Sending data to form");
  const { name, propellers, maxSpeed } = req.body;
  try {
    const newDrone = await Drone.create({ name, propellers, maxSpeed });
    console.log(newDrone);
    return res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

router.get("/drones/:droneID/edit", async (req, res) => {
  const { droneID } = req.params;
  // console.log(droneID);
  try {
    const foundDrone = await Drone.findById(droneID);
    // console.log(foundDrone);
    res.render("drones/update-form", { drone: foundDrone });
  } catch (error) {
    console.log(error);
  }
});

router.post("/drones/:droneID/edit", async (req, res) => {
  const { droneID } = req.params;
  // console.log(droneID);
  const { name, propellers, maxSpeed } = req.body;
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(
      droneID,
      { name, propellers, maxSpeed },
      { new: true }
    );
    return res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
