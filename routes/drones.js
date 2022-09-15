const express = require("express");
const router = express.Router();

// require the Drone model here
const { Drone } = require("../models/Drone.model");

router.get("/", async (req, res, next) => {
  // Iteration #2: List the drones
  const allDrones = await Drone.find();
  console.log(allDrones);
  res.render("drones/list", { allDrones });
});

router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get("/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
