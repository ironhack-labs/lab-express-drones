const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone= require ("../models/Drone.model.js")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  async function findAllDronesFromDB(){
    try{
      let allDronesFromDb = await Drone.find();
      //checking feedback
      console.log(`Retrieved drones from DB:`,allDronesFromDb)
      res.render("drones/list", {drones:allDronesFromDb})

    }
    catch(error){
      console.log(error);
      

    }
  }
  findAllDronesFromDB();
});



router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // GET route to display the form
  res.render('drones/create-form');
});
// POST route to save a new drone to the database in the drones collection
router.post('/drones/create', (req,res)=>{
  //console.log(req.body); 

  // destructuring the req.body object
  const {name, propellers, maxSpeed} = req.body;

  async function createDroneInDb(){
   try{
       // Creating the drone in Db
       let createdDrone = await Drone.create({name, propellers, maxSpeed});
       //Feedback regarding the drone Created in Db
       ///console.log(`New drone created: ${createddrone.name} `);
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
