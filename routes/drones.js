const express = require("express");
const router = express.Router();
const Drones = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", async (req, res, next) => {
  const dronesArray = await Drones.find();
  console.log(dronesArray);
  res.render("drones/list.hbs", { dronesArray });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    await Drones.create({
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = await Drones.findById(id);

    res.render("drones/update-form", { id, name, propellers, maxSpeed });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;
    await Drones.findByIdAndUpdate(id, {
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Drones.findByIdAndDelete(id);
    res.redirect("/drones");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
