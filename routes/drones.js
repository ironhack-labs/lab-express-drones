const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  async function findAllDronesFromDb() {
    try {
      //Find all the books inside the collection
      let allDronesFromDb = await Drone.find();

      //Feedback regarding to found books
      console.log("Retrieved drones from DB:", allDronesFromDb);

      //Render all books from DB with hbs view
      res.render("drones/list.hbs", { drones: allDronesFromDb });
    } catch (error) {
      console.log(error);
    }
  }
  findAllDronesFromDb();
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  async function createDroneInDb() {
    try {
      let createDrone = await Drone.create({
        name,
        propellers,
        maxSpeed,
      });
      console.log(`New Done Created: ${createDrone.name}`);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
  createDroneInDb();
});

// Iteration #4: Update the drone
router.get("/drones/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const drone = await Drone.findById(id);
    console.log("Retrieved drone from DB:", drone);
    res.render("drones/update-form.hbs", { drone });
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/edit", async (req, res) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  try {
    let updatedDrone = await Drone.findByIdAndUpdate(
      id,
      { name, propellers, maxSpeed },
      { new: true }
    );
    console.log(`Drone updated: ${updatedDrone.name}`);
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
    res.render("drones/update-form.hbs", { drone: req.body });
  }
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then((deletedDrone) => {
      console.log(`Deleted drone: ${deletedDrone.name}`);
      res.redirect("/drones");
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
