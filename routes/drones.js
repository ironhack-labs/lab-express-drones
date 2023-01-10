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

router.get("/create", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/create", (req, res, next) => {
  try {} catch (error) {
    next(error);
  }
});

router.get("/:id/edit", (req, res, next) => {
  try {} catch (error) {
    next(error);
  }
});

router.post("/:id/edit", (req, res, next) => {
  try {} catch (error) {
    next(error);
  }
});

router.post("/:id/delete", (req, res, next) => {
  try {} catch (error) {
    next(error);
  }
});

module.exports = router;
