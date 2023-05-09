const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

// GET route to retrieve and display all the Drones
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  async function findAllDronesFromDB(){
    try{
        // Find all the drones inside the collection
        let allDronesFromDb = await Drone.find();

        // Render all drones from DB with hbs view
        res.render('drones/list.hbs', {drones: allDronesFromDb})
    }
    catch(error){
        cansole.log(error);
    }
}
findAllDronesFromDB();
});

// GET route to display the form
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

// POST route to save a new drone to the database
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  //destructuring the req.body object
  const {name, propellers, maxSpeed} = req.body;
  async function createDroneInDb(){
      try{
          // Creating the Drone in Db
          let createdDrone = await Drone.create({name, propellers, maxSpeed});
          res.redirect('/drones')
      }
      catch(error){
          console.log(error)
      }
  }
  createDroneInDb()
});

// GET route to display the form to update
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  async function findInfoFromADrone(){
    try{
        //get info of the drone we want to edit
        let droneToEdit = await Drone.findById(id)
        res.render('drones/update-form.hbs', {Drone: droneToEdit});
    }
    catch(error){
        console.log(error);
    }
  }
  findInfoFromADrone()
});

// POST route to actually make update
router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
   //destructuring the req.params.id
   const {id} = req.params;
   const {name, propellers, maxSpeed} = req.body;

   async function updateADroneFromDb(){
       try{
           let updatedDrone= await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true});
           res.redirect(`/drones/${updatedDrone._id}`);
       }
       catch(error){
           cansole.log(error);
       }
   }
   updateADroneFromDb()
});

// POST route to delete a drone
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
            cansole.log(error);
        }
    }
    deleteADroneFromDb()
});

module.exports = router;
