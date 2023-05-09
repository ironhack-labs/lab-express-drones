const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

  // Iteration #2: List the drones
  // ... your code here
  // GET route to retrive ans display all the drones
router.get('/drones', (req, res)=> {
  async function findAllDronesFromDB(){
      try{
          //Find all the books inside the collection
          let allDronesFromDB = await Drone.find();

          // Feedback regarding to found books
          console.log('Retrived books from DB:', allDronesFromDB);

          // Render all drones from DB with hbs view
          res.render('drones/list.hbs', {drones: allDronesFromDB});
      }
      catch(error){
          console .log(error);
      }
  }
  findAllDronesFromDB();
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  // GET route to display the form
  res.render('drones/create-form.hbs')
  });

 

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body);

  // Destructuring the req.body object
  const {name, propellers, maxSpeed} = req.body;

  async function createDroneInDb(){
      try{
          // Creating the Drone in Db
          let createdDrone = await Drone.create({name, propellers, maxSpeed});
    
          // Render
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
  // ... your code here
  const {id} = req.params;

  async function findInfoFromADrone(){
      try{
          // get info of the drone we want to edit
          let droneToEdit = await Drone.findById(id);
          // Render info with hbs view
          res.render('drones/update-form.hbs', {Drone: droneToEdit});
      }
      catch (error){
          console.log(error);
      }
  }

  findInfoFromADrone();
});


  // Iteration #4: Update the drone
  // ... your code here
router.post('/drones/:id/edit', (req, res)=>{
  const {id} = req.params; 
  const {name, propellers, maxSpeed} = req.body;

  async function updateADroneFromDb(){
      try{
        let updatedDrone = await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true});
        res.redirect(`/drones/${updatedDrone._id}`);
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
});

module.exports = router;
