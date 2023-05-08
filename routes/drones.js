const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  async function findAllDronesFromDb() {
    try {
      //Find all the drones inside the collection
      let allDronesFromDb = await Drone.find();

      //Feedback regarding to found books
      console.log("Retrieved drones from DB:", allDronesFromDb);

      //Render all drones from DB with hbs view
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
      //console.log(`New Drone Created: ${createBook.title}`);
      res.redirect("/drones");
    } catch (error) {
      console.log(error);
    }
  }
  createDroneInDb();
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  // Feedback regarding req.params.id
  //console.log(id);

  async function findInfoFromDrone() {
    try {
      // Get info of the drone we want to edit
      let droneToEdit = await Drone.findById(id);
      // Render info with hbs view
      res.render("drones/update-form.hbs", { drone: droneToEdit });
    } catch (error) {
      console.log(error);
    }
  }
  findInfoFromDrone();
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  async function updateADroneFromDb() {
    try {
      let updatedDrone = await Drone.findByIdAndUpdate(
        id,
        { name, propellers, maxSpeed },
        { new: true }
      );
      res.redirect("/drones"); // Redirect to the drones list page
    } catch (error) {
      console.log(error);
    }
  }
  updateADroneFromDb();
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  async function deleteADroneFromDb() {
    try {
      let deletedDrone = await Drone.findByIdAndDelete(id);
      res.redirect("/drones");
    } catch (error) {
      console.log(error);
    }
  }
  deleteADroneFromDb();
});

module.exports = router;
