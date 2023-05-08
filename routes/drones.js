const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  async function findAllDronesDB (){
  try{ data = await Drone.find();
   //console.log(data)
   res.render('drones/list.hbs', {drones:data})
  }
  catch(error){console.log(error)}
}
findAllDronesDB();
});



router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  let {name, propellers, maxSpeed} = req.body;

  async function createDrone(){
    try{
      let newDrone = await Drone.create({name, propellers, maxSpeed});
    //console.log(newDrone);
      res.redirect('/drones');
    }
    catch(error){
      console.log(error);
      res.redirect('/drones/create');
    }
  }
  createDrone();
});



router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {droneId} = req.params;
  //console.log(droneId)
    // Feedback regarding req.params.droneId
    // console.log(droneId);

  async function findInfoFromADrone(){
      try{
          // get info of the drone we want to edit
          let droneToEdit = await Drone.findById(droneId);
          //console.log(droneToEdit)
          // Render info with hbs view
          res.render('drones/update-form.hbs', {drone: droneToEdit});
      }
      catch (error){
          console.log(error);
      }
  }
  findInfoFromADrone();



});

router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {droneId} = req.params; 
  let {name, propellers, maxSpeed} = req.body;
  /* console.log(req.body) */
  async function updateDrone(){
    try{
      let newDrone = await Drone.findByIdAndUpdate(droneId,{name, propellers, maxSpeed}, {new:true});
      console.log(newDrone);
      res.redirect('/drones');
    }
    catch(error){
      console.log(error)
      res.redirect('/drones/:droneId/edit');
    }
  }
  updateDrone();

});

router.post('/drones/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {droneId} = req.params;
  async function deleteDrone(){
    try{
      let delDrone = await Drone.findByIdAndDelete(droneId);
      console.log(delDrone);
      res.redirect('/drones')
      console.log('You have deleted the drone');
    }
    catch(error){
      console.log(error)
      res.redirect('/drones/:droneId/delete');
    }
  }
  deleteDrone();
});

module.exports = router;
