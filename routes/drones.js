const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

// Iteration #2: Listing the available drones
router.get('/drones', (req, res, next) => {
 Drone.find()
      .then((dronesFromDb) => {
        
        res.render("drones/list", { drones: dronesFromDb });
      })
      .catch((err) => {
        console.log("error getting details from the db", err);
        next();
      });
  });

// Iteration #3: Add a new drone
router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form");
});
 


router.post('/drones/create', (req, res, next) => {
 
  const droneDetail = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }
  Drone.create(droneDetail)
    .then((droneDetails) => {
      
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("err creating new drone to the db", err);
      next();
    })
});

// Iteration #4: Update the drone
router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then((dronedetails) =>{
      res.render("drones/update-form",dronedetails);
  })
  .catch(err =>{
      console.log("err displaying drone detail from db",err);
      next();
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id;
    const newDetail = {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
      };
    Drone.findByIdAndUpdate(droneId,newDetail)
      .then((droneDetails) => {
       
        res.redirect("/drones");
      })
      .catch((err) => {
        console.log("error updating Drone information to the db", err);
        next();
      })
  
});
// Iteration #5: Delete the drone
router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then(() =>{
      console.log("drone deleted");
      res.redirect("/drones")
  })
  .catch(err =>{
      console.log("error deleting the drone from the database",err);
      next();
  });
 
});

module.exports = router;
