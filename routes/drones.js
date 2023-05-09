const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js')

// GET route to retrieve and display all the drones
router.get('/drones', (req,res)=>{
  async function findAllDronesFromDb(){
    try{
        // Find all the drones inside the collection 
        let allDronesFromDb = await Drone.find();

        // Feedback regarding to found drones
        // console.log('Retrieved drones from DB:', alldronesFromDb);

        // Render all drones from DB with hbs view
        res.render('drones/list.hbs', {drones: allDronesFromDb});
    }
    catch(error){
        console.log(error);
    }
  }
  findAllDronesFromDb();
});

// GET route to display the form
router.get('/drones/create', (req,res)=>{
  res.render('drones/create-form.hbs');
});

// POST route to save a new drone to the database in the drones collection
router.post('/drones/create', (req,res)=>{
 //console.log(req.body); 

 // destructuring the req.body object
 const {name, propellers, maxSpeed} = req.body;

 async function createdroneInDb(){
  try{
      // Creating the drone in Db
      let createddrone = await Drone.create({name, propellers, maxSpeed});
      //Feedback regarding the drone Created in Db
      console.log(`New drone created: ${createddrone.name} `);
      res.redirect('/drones');
  }
  catch(error){
      console.log(error);
  }
 }

 createdroneInDb();
});

/// UPDATE
/// GET route to display the form to update a specific drone
router.get('/drones/:droneId/edit', (req, res)=>{
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

// POST route to actually make updates on a specific drone
router.post('/drones/:droneId/edit', (req, res)=>{
  // destructuring the req.params.droneId
  const {droneId} = req.params; 
  const {name, propellers, maxSpeed} = req.body;

  async function updateADroneFromDb(){
      try{
        let updatedDrone = await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new: true});
        res.redirect(`/drones/`);
      }
      catch(error){
          console.log(error);
      }
  }

  updateADroneFromDb();
});


////////////////////


// POST route to delete a drone from the database

router.post('/drones/:droneId/delete', (req, res)=>{
  const {droneId} = req.params; 

  async function deleteADroneFromDb(){
      try{
          let deletedDrone = await Drone.findByIdAndDelete(droneId);
          res.redirect('/drones');
      }
      catch(error){
          console.log(error);
      }
  }
  deleteADroneFromDb();
});



module.exports = router;
