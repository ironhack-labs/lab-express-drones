const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  async function listDrones () {
    try {
      let listedDrones = await Drone.find();
      console.log(listedDrones);
      res.render("drones/list.hbs", {drones: listedDrones})
    }
    catch (error) {
      console.log(error)
    }
  }
  listDrones();
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  async function createDroneInDb () {
    try {
      let createdDrone = await Drone.create({ name, propellers, maxSpeed });
      console.log(`New drone created: ${createdDrone.name}`)
      res.redirect("/books")
    }
    catch (error) {
      console.log(error)
    }
  }
  createDroneInDb();
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;

  console.log(droneId);

  async function findInfoOfDrone() {
    try {
      let droneToEdit = await Drone.findById(droneId);

      res.render("drones/update-form.hbs", { drone: droneToEdit });
    } catch (error) {
      console.log(error);
    }
  }
  findInfoOfDrone();
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  const { droneId } = req.params;

  const { name, propellers, maxSpeed } = req.body;

  async function updateDroneFromDb() {
    try {
      let updatedDrone = await Drone.findByIdAndUpdate(
        droneId,
        { name, propellers, maxSpeed },
        { new: true }
      );

      res.redirect(`/drones/${updatedDrone._id}/edit`);
    } catch (error) {
      console.log(error);
    }
  }
  updateDroneFromDb();
});

router.post('/drones/:droneId/delete', (req, res, next) => {
  const { droneId } = req.params;

  async function deleteDroneFromDb() {
    try {
      let deletedDrone = await Drone.findByIdAndDelete(droneId);
      res.redirect('/drones')
    } catch (error) {
      console.log(error);
    }
  }
  deleteDroneFromDb();
});

module.exports = router;
