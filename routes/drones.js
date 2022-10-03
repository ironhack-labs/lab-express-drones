const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
        .then(AllDronesFromDb => {
          console.log(AllDronesFromDb);
          res.render("drones/list",{drones: AllDronesFromDb})

        })
        .catch((error) => {
          console.log("Error getting datas from DB", error)
          next()
        })

});

//CREATE 
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  //const droneDetails = {name, propellers, maxSpeed};
  Drone.create({name, propellers, maxSpeed})
        .then(droneDetails => {
          console.log("New Drone is created successfully",droneDetails);
          res.redirect("/drones")
        })
        .catch(error => {
          console.log("Error creating a drone",error);
          next();
        })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  Drone.findById(droneId)
        .then((droneDetails)=>{
          console.log(droneDetails)
          res.render("drones/update-form", droneDetails)
        })
        .catch((error) => {
          console.log("Error getting Drone details from DB",error);
          next();
        })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(req.body);
  const droneId = req.params.id;
  const {name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(droneId,{name, propellers, maxSpeed})
        .then((updatedData)=>{
              console.log("Drone data updated successfully",updatedData)
              res.redirect("/drones")
        })
        .catch((error) => {
          console.log("Error updating data in the DB",error);
          next();
        })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
