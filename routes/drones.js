const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    //Book.find() without any arguments retrieves an array with all the books from the db
    let drones = await Drone.find();
    //render the view with the information
    res.render("drones/list", { drones });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/drones/create", (req, res) => res.render("drones/create-form"));
// Iteration #3: Add a new drone
// ... your code here

router.post("/drones/create", async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;

    const created = await Drone.create({ name, propellers, maxSpeed });

    res.redirect(`/drones`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
    try {
      const { id } = req.params;
      const drones = await Drone.findById(id);
      res.render('drones/update-form', drones);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;

    await Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed });

    res.redirect(`/drones`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/drones/:id/delete", async(req, res, next) => {
  // Iteration #5: Delete the drone
    try {
      const { id } = req.params;
      await Drone.findByIdAndDelete(id);
      res.redirect('/drones');
    } catch (error) {
      console.log(error);
      next(error);
    }
  });


module.exports = router;
