const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  try {
    const drones = await Drone.find();
    res.render("drones/list", { drones });
  } catch (error) {
    console.log(error);
  }
});

router.get("/drones/create", async (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    await Drone.create({
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
    res.render("drones/create-form");
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const drone = await Drone.findById(id);
    res.render("drones/update-form", drone);
  } catch (error) {
    console.log(error);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;
    await Drone.findByIdAndUpdate(
      id,
      { name, propellers, maxSpeed },
      { new: true }
    );
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Drone.findByIdAndDelete(id);
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
