let express = require('express');
let router = express.Router();

let Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
    async function findAllDrones(){
      try{
          let allDronesFound = await Drone.find();
          res.render('drones/list.hbs', {drones: allDronesFound});
      }
      catch(error){
          console.log(error);
          res.redirect("/drones");
      }
    }
    findAllDrones();
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  let {name, propellers, maxSpeed} = req.body;

   async function createDrone(){
    try{
        let createdDrone = await Drone.create({name, propellers, maxSpeed});
        res.redirect('/drones');
    }
    catch(error){
        console.log(error);
        res.redirect("/drones/create")
    }
   }
   createDrone();
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let {droneId} = req.params;
  async function findDrone() {
    try{
      let droneToEdit = await Drone.findById(droneId)
      res.render("drones/update-form.hbs", droneToEdit);
    }
    catch(error){
      console.log(error);
      res.redirect("/drones/:droneId/edit")
    }
  }
  findDrone();
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let {droneId}= req.params;
  let {name, propellers, maxSpeed} = req.body;
  async function updateDrone () {
    try {
      let updatedDrone = await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true});
      res.redirect("/drones")
    }
    catch(error){
      console.log(error);
      res.redirect("/drones/:droneId/edit")
    }
  }
  updateDrone();
});

router.post('/drones/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let {droneId} = req.params; 
    async function deleteDrone(){
        try{
            let deletedDrone = await Drone.findByIdAndDelete(droneId);
            res.redirect('/drones');
        }
        catch(error){
            console.log(error);
            res.redirect("/drones")
        }
    }
    deleteDrone();
});

module.exports = router;