const express = require("express");
const router = express.Router();

const { create } = require("hbs");

const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  try {
    let drones = await Drone.find();
    console.log(drones);
    res.render("drones/list", { drones });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/drones/create", (req, res) => res.render("drones/drones-create"));

router.post("/drones/create", async (req, res) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    await Drone.create({ name, propellers, maxSpeed });
    console.log(Drone);

    res.redirect("/drones");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/drones-create")
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  try {

    const {name, propellers, maxSpeed} = req.body
    await Drone.create({name, propellers, maxSpeed});

    res.redirect("/drones");

  } catch (error) {
    console.log(error)
    next(error)
  }
}); */

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
