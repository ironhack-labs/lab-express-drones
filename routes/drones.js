const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  async function getAllDrones(){
    try{
      let allDrones = await Drone.find();
      console.log(`Found all the drones, `, allDrones);

      res.render('drones/list', {drones: allDrones});

    }catch(error){
      console.error(error);
    }

  }
  
  getAllDrones();
  // Iteration #2: List the drones
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  
  res.render('drones/create-form.hbs');
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  
  const {name, propellers, maxSpeed} = req.body;

  async function createDroneInDb(){

    try{
        let createdDrone = await Drone.create({name, propellers, maxSpeed});
        console.log(createdDrone);
        res.redirect('/drones');

    }catch(error){

      console.error(error);

    }

    

  }
  
  
  createDroneInDb();
  
  // Iteration #3: Add a new drone
  // ... your code here
});




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
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
 
async function updateADroneFromDb(){
try{
  let updatedDroneDb = await Drone.findByIdAndUpdate(id,{name, propellers, maxSpeed},{new: true})// it needs to return new object not the original 
  res.redirect(`/drones`);
  

}catch(error){
  console.error(error);
}


}
  
  updateADroneFromDb();
  
  
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  
  let {id} = req.params;

  async function findAndDeleteDrone(){

    try{
      let deletedDrone = await Drone.findByIdAndDelete(id);
      res.redirect('/drones');


    } catch(error){

      console.error(error);

    }




  }
  
  
  findAndDeleteDrone();
  
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
