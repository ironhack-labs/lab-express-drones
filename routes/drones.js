const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/", async (req, res, next) => {
  try {
    const allDrones = await Drone.find();
    res.render("drones/list", { allDrones });
  } catch (error) {
    next(error);
  }
});

router.get("/create", (req, res, next) => res.render('drones/create-form'));

router.post("/create", async (req, res, next) => {
  try {
    await Drone.create(req.body)
    res.redirect('.')
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const drone = await Drone.findById(req.params.id)
    res.render('drones/update-form', drone)
  } catch (error) {
    next(error);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('..')
  } catch (error) {
    next(error);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    await Drone.findByIdAndRemove(req.params.id)
    res.redirect('..')
  } catch (error) {
    next(error);
  }
});

module.exports = router;
