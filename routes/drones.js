const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require ('../models/Drone.model');

router.get('/drones', (req, res, next) => {
 
  Drone
  .find()
  .then(responseFromMongoose=>{
    console.log("Successfully get the list of drones from DB:",responseFromMongoose);
    res.render("drones/list.hbs",{allTheDrones:responseFromMongoose})
  })
  .catch(err=>{
    console.error("Error getting list of all the drones", err);
  })

});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers,maxSpeed} = req.body;

  Drone.create({name, propellers,maxSpeed})
    .then(droneFromDB =>{
      console.log('New drone created:', droneFromDB.name);  
      res.redirect('/drones')  
    })
    .catch(err=>{
      console.error("Error creating new drone",droneFromDB.name,err);
      res.render("drones/create-form.hbs");
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  // console.log(req.params);
  Drone.findById(id)
    .then(theDroneByReq => res.render('drones/update-form.hbs',{theDrone: theDroneByReq}))
    .catch(err => {
      console.error("Error editting the drone", theDroneByReq, err);
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  //console.log(req.body);
  const {name, propellers,maxSpeed} = req.body;

  Drone.findByIdAndUpdate(id, {name, propellers,maxSpeed},{new:true})
    .then(updateDrone => res.redirect('/drones'))
    .catch(err=>{
      console.error("Error updating the drone",updateDrone,err);
      res.render('drones/update-form.hbs')
    })
  });

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params;
  
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err=>{
      console.error("Error deleting the drone",err);
    })
});

module.exports = router;
