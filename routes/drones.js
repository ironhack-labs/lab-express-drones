const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  async function findAllDronesFromDB() {
    try {
      let allDronesFromDB = await Drone.find();

      console.log("Retrieved drones from DB:", allDronesFromDB);

      res.render("drones/list.hbs", { drones: allDronesFromDB });
    } catch (error) {}
  }
  findAllDronesFromDB();
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
      res.redirect("/drones");
    } catch (error) {
      console.log(error);
    }
  }
  createDroneInDb();
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  /* const { droneId } = req.params; */
  async function findInfoFromADrone() {
    try {
      console.log(req.params.id);
      let droneToEdit = await Drone.findById(req.params.id);
      //Render info with hbs view
      res.render("drones/update-form.hbs", droneToEdit);
    } catch (error) {
      console.log(error);
    }
  }
  findInfoFromADrone();
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  async function updateDroneFromDB() {
    try {
      console.log(id);
      let updatedDrone = await Drone.findByIdAndUpdate(
        id,
        { name, propellers, maxSpeed },
        { new: true }
      );
      res.redirect(`/drones`);
    } catch (error) {}
  }
  updateDroneFromDB();
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  async function deleteADroneFromDB() {
    try {
      let deletedDrone = await Drone.findByIdAndDelete(id);
      res.redirect("/drones");
    } catch (error) {
      console.log(error);
    }
  }
  deleteADroneFromDB();
});

module.exports = router;
