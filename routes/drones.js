const express = require("express");

// require the Drone model here
const Drones = require("../models/drones.model");

const router = express.Router();

router.get("/drones", async (req, res, next) => {
  const droneDB = await Drones.find();
  res.render("drones/list", { drones: droneDB });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    const createDrone = await Drones.create({ name, propellers, maxSpeed });
    console.log(`New book created: ${createDrone.name}.`);
    res.redirect("/drones");
  } catch (e) {
    next(e);
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
