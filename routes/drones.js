const express = require("express");

// require the Drone model here
const Drones = require("../models/drones.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("index");
});

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

router.get("/drones/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  try {
    const droneSolo = await Drones.findById(id);
    console.log(droneSolo);
    res.render("drones/update-form", droneSolo);
  } catch (e) {
    next(e);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const dronesUpdate = req.body;
  try {
    await Drones.findByIdAndUpdate(id, dronesUpdate, { new: true });
    res.redirect("/drones");
  } catch (e) {
    next(e);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Drones.findByIdAndDelete(id);
    res.redirect("/drones");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
