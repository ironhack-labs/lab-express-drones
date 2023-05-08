const express = require('express');
const router = express.Router();



// require the Drone model here
const Drone = require("../models/Drone.model.js");






router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

    async function findAllDronesFromDb(){
      try{
        //Find all the drones
        let allDronesFromDb = await Drone.find();

        //Render all drones from DB viewing on HBS
        res.render("drones/list", {drones: allDronesFromDb});
      }
      catch(error){
        console.log(error);
      }
    }
    findAllDronesFromDb();
  });



router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    res.render("drones/create-form");
  });



router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body;

  async function createDroneInBd(){
    try{
      //Create new Drone
      let createDrone = await Drone.create({name, propellers, maxSpeed});

      res.redirect("/drones");
    }
    catch(error){
      console.log(error);
    }
  }
  createDroneInBd();
});



router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;

  async function findInfoFromADrone(){
    try{
      let droneToEdit = await Drone.findById(id);
      res.render("drones/update-form", {drone: droneToEdit});
    }
    catch(error){
      console.log(error);
    }
  }
  findInfoFromADrone();

});



router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here 
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;

  async function updateADroneFromDb(){
    try{
      let updateDrone = await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true});
      res.redirect(`/drones`)
    }
    catch(error){
      console.log(error);
    }
  }
  updateADroneFromDb();
});



router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params;

  async function deleteADroneFromDb(){
    try{
      let deleteDrone = await Drone.findByIdAndDelete(id);
      res.redirect(`/drones`)
    }
    catch(error){
      console.log(error);
    }
  }
  deleteADroneFromDb();
});

module.exports = router;
