const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  async function findAllDronesFromDb(){
    try{
        // Find all the drones inside the collection 
        let allDronesFromDb = await Drone.find();

        // Feedback regarding to found drones
        // console.log('Retrieved drones from DB:', allDronesFromDb);

        // Render all drones from DB with hbs view
        res.render('drones/list.hbs', {drones: allDronesFromDb});
    }
    catch(error){
        console.log(error);
    }
  }
  findAllDronesFromDb();
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;

  async function createDroneInDb(){
   try{
       // Creating the Drone in Db
       let createdDrone = await Drone.create({name, propellers, maxSpeed});
       //Feedback regarding the Drone Created in Db
       console.log(`New drone created: ${createdDrone.name} `);
       res.redirect('/drones');
   }
   catch(error){
       console.log(error);
   }
  }

  createDroneInDb();

});


router.get('/drones/:droneId/edit', (req, res, next) => {
  // Destructuring the req.params.droneId object
  const {droneId} = req.params;

  // Feedback regarding req.params.droneId
  // console.log(droneId);

  async function findInfoFromADrone(){
      try{
          // get info of the drone we want to edit
          let droneToEdit = await Drone.findById(droneId);
          // Render info with hbs view
          res.render('drones/update-form.hbs', {drone: droneToEdit});
      }
      catch (error){
          console.log(error);
      }
  }

  findInfoFromADrone();

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
    // destructuring the req.params.droneId
    const {id} = req.params; 
    const {name,propellers,maxSpeed} = req.body;

    async function updateADroneFromDb(){
        try{
          let updatedDrone = await Drone.findByIdAndUpdate(id, {name,propellers,maxSpeed}, {new: true});
          res.redirect(`/drones`);
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
            let deletedDrone = await Drone.findByIdAndDelete(id);
            res.redirect('/drones');
        }
        catch(error){
            console.log(error);
        }
    }
    deleteADroneFromDb();
});

module.exports = router;