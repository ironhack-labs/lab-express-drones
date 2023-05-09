const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js')


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
 async function findAllDronesFromDb(){
    try{
      let allDronesFromDb = await Drone.find();
      res.render('drones/list.hbs', {drones: allDronesFromDb});
    }
    catch(error){
      console.log(error);
    }
  }
  findAllDronesFromDb();
});

  // Iteration #3: Add a new drone
router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});



router.post('/drones/create', (req, res, next) => {
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


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
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
  // Iteration #4: Update the drone
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
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {DroneId} = req.params; 

    async function deleteADroneFromDb(){
        try{
            let deletedDrone = await Drone.findByIdAndDelete(DroneId);
            res.redirect('/drones');
        }
        catch(error){
            console.log(error);
        }
    }
    deleteADroneFromDb();
});

module.exports = router;
