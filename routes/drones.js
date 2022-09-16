const express = require("express");
const router = express.Router();
const { Drone } = require("../models/Drone.model");

// require the Drone model here

router.get("/", async (req, res, next) => {
  // Iteration #2: List the drones
  const drones = await Drone.find();
  res.render("./drones/list", { drones });
});

router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("./drones/create-form");
});

router.post("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const newDrone = new Drone({ ...req.body });
    await newDrone.save();
    res.redirect("/drones");
  } catch (err) {
    res.render("error");
  }
});

router.get("/:id/edit",async (req, res, next) => {
  // Iteration #4: Update the drone
  const foundDrone = await Drone.findOne({ _id: req.params.id });
  res.render("./drones/update-form", { drone: foundDrone });
});

router.post("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // const sanitizedBody = Object.fromEntries(
  //   Object.entries(req.body).map(([key, value]) => {
  //     return [key, req.sanitize(value)];
  //   })
  // );

  await Drone.findOneAndUpdate({ _id: req.params.id }, { ...req.body }); //sanitizedBody
  res.redirect("/drones");
});

router.post("/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  await Drone.findOneAndDelete({ _id: req.params.id });
  res.redirect("/drones");
});

module.exports = router;
