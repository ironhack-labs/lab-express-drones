const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  async function findAllDronesFromDb() {
    try {
      // Find all the drones inside the collection
      let allDronesFromDb = await Drone.find()
      //Feedback regarding to found drones
      // console.log('Retrieved drones from DB:' , allDronesFromDb)
      res.render('drones/list.hbs', { drones: allDronesFromDb })
    }
    catch (error) {
      console.log(error)
    }
  }
  findAllDronesFromDb()

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  const { name, propellers, maxSpeed } = req.body;

  async function createDroneInDb() {
    try {
      // Creating drone in DB
      let createDrone = await Drone.create({ name, propellers, maxSpeed })
      // Feedback regarding the drone creation
      console.log(`Created drone: ${createDrone.name}`)
      res.redirect('/drones')
    }
    catch (error) {
      console.log(error)
    }
  }
  createDroneInDb()
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params
  console.log(droneId)

  async function findInfoFromADrone() {
    try {
      let droneToEdit = await Drone.findById(droneId)
      res.render('drones/update-form.hbs', { drone: droneToEdit })
    }
    catch (error) {
      console.log(error)
    }
  }
  findInfoFromADrone()
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  async function updateADroneFromDb() {
    try {
      let updateDrone = await Drone.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
      res.redirect(`/drones/${updateDrone._id}`)
    }
    catch (error) {
      console.log(error)
    }
  }
  updateADroneFromDb()
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { droneId } = req.params;

  async function DeleteADroneFromDb() {
    try {
      let deletedDrone = await Drone.findByIdAndDelete(droneId);
      res.redirect('/drones')
    }
    catch (error) {
      console.log(error)
    }
  }
  DeleteADroneFromDb()
});

module.exports = router;
