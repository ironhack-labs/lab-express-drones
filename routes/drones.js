const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');
const { route } = require('./drones.js');

router.get('/drones', (req, res) => {
  // Iteration #2: List the drones
    async function findAllTheDrones(){
        try{
            let allDronesFromDb = await Drone.find();
            console.log('FOUND ALL', allDronesFromDb);
            res.render('drones/list.hbs', {drones: allDronesFromDb});
        }
        catch(error){
            console.log(error);
        }
    }
    findAllTheDrones();
});

router.get('/drones/create', (req,res)=>{
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res) => {
  // Iteration #3: Add a new drone
    const {name, propellers, maxSpeed} = req.body;
    async function createDroneInDb(){
        try{
            let createdDrone = await Drone.create({name, propellers, maxSpeed});
            res.redirect('/drones');
        }
        catch(error){
            console.log(error);
        }
    }
    createDroneInDb();
});

// Iteration #4: Update the drone

router.get('/drones/:id/edit', (req, res, next) => {
    const {id} = req.params;
     console.log(id);
   
     async function updateDrone(){
   
     try{
       let updatedDrone = await Drone.findById(id);
      res.render('drones/update-form.hbs', {drone: updatedDrone});
   
       }catch(error){
   
         console.error(error);
       }
   
     }
     updateDrone();

   });
   
   router.post('/drones/:id/edit', (req, res, next) => {
   
     const {id} = req.params;
     const {name, propellers, maxSpeed} = req.body;
    
   async function updateADroneFromDb(){
   try{
     let updatedDroneDb = await Drone.findByIdAndUpdate(id,{name, propellers, maxSpeed},{new: true})// it needs to return new object not the original 
     res.redirect('/drones');
   
   
   }catch(error){
     console.error(error);
   }
   
   
   }
   
     updateADroneFromDb();
   
   
     // Iteration #4: Update the drone
     // ... your code here
   });
// router.get('/drones/:id/edit', (req, res) => {
//     const {id} = req.params;
//     async function findInfoFromADrone(){
//         try{
//             let droneToEdit = await Drone.findById(id);
//             res.render('drones/update-form.hbs', {drones: droneToEdit});
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
//     findInfoFromADrone();
// })
  

// router.post('/drones/:id/edit', (req, res) => {
//   // Iteration #4: Update the drone
//     const {id} = req.params;
//     const {name, propellers, maxSpeed} = req.body;
    
//     async function updateADroneFromDb(){
//         try{
//             let updatedDrone = await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true});
//             res.redirect('/drones');
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
    
//     updateADroneFromDb();
    
//     });


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
})

module.exports = router;
