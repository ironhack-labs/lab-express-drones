const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  
  async function findAllDronesFromDb(){
    try{
        //find all the drones inside the collection
        let allDronesFromDb = await Drone.find();

        //feedback regarding to found drones
        console.log('Retrieved drones from DB: ', allDronesFromDb);
        
        //render all drones from DB with hbs view
        res.render('drones/list.hbs', {drones: allDronesFromDb});
    }
    catch(error){

    }
}
  findAllDronesFromDb();
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  //console.log(req.body);
  const {name, propellers, maxSpeed} = req.body;

  async function createDroneInDb(){

      try{
          //creating the drone in DB
          let createdDrone = await Drone.create({name, propellers, maxSpeed});
          //feedback regarding the drone created in the db
          //console.log(`New drone created: ${createdDrone.title}`);
          res.redirect('/drones');
      }
      catch(error){
          console.log(error);
      }
  }
  createDroneInDb();
});

router.get('/drones/:droneId/edit', (req, res, next) => {
 //destructuring the req.params.droneId object
 const {droneId} = req.params;
 //feedback regarding req.params.droneId
 //console.log(droneId);
 async function findInfoFromADrone(){
     try{
         //get info of the drone we want to edit
         let droneToEdit = await Drone.findById(droneId);
         //render info with hbs view
         res.render('drones/update-form.hbs', {drone: droneToEdit})
     }
     catch(error){
         console.log(error);
     }
 }
 findInfoFromADrone();});

router.post('/drones/:droneId/edit', (req, res, next) => {
//destructuring the req.params.droneId
const {droneId} = req.params;
const {name, propellers, maxSpeed} = req.body;

async function updateDroneFromDb(){
    try{
        let updatedDrone = await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true})
        res.redirect(`/drones/${updatedDrone._id}/edit`)
    }
    catch(error){
        console.log(error);
    }
}
updateDroneFromDb();});

router.post('/drones/:droneId/delete', (req, res, next) => {
  const {droneId} = req.params;
    
  async function deleteADroneFromDb(){
      try{
          let deletedDrone = await Drone.findByIdAndDelete(droneId);
          console.log('deleted')
          res.redirect('/drones/');
      }
      catch(error){
          console.log(error)
      }
  }
  deleteADroneFromDb();});

module.exports = router;
