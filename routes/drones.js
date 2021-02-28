const express = require('express');

// require the Drone model here
const DroneModel = require("../models/Drone.model")

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
  .then((dbRes) => {
    //res.json("hello")
    res.render("drones/list", {
    drones: dbRes,
  })
  })
  .catch((dbError) => {
    next(dbError)
  });

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  console.log(req.body)
 
  DroneModel.create({
     name, 
     propellers,
     maxSpeed
  })
  .then(() => {
    console.log('hellopple')
    res.redirect("/drones");
  })
  .catch((dbError) => {
    res.render("/drones/create")
    console.log(dbError)
  })
  
});
  

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  DroneModel.findById(req.params.id)
  .then((drone) => {
    res.render("drones/update-form", {drone})})
  .catch((dbError)=>{
    next(dbError);
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, 
     {name, 
     propellers, 
     maxSpeed})
  .then(() => {
    res.redirect("/drones")})
  .catch((dbError) => {
    next(dbError)
    res.render("/update-form")
  });

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  DroneModel.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones")})
  .catch((dbError) => {
    next(dbError)
  });
});


module.exports = router;
