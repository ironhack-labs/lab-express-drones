const express = require('express');

// require the Drone model here
const DroneModel = require("./../models/DroneModel");
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then((dronesDB) => {
    console.log(dronesDB);
    res.render("list", { drones: dronesDB});
  })
  .catch((dbError) => {
    next(dbError);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render("drone-create");

});

router.post('/drones/create',  async(req, res, next) => {
  res.render("create-form");
  // Iteration #3: Add a new drone
    const { name, propellers, maxSpeed } = req.body;
    try {
      await DroneModel.create({
      name,
      propellers,
      maxSpeed,
    });}
    catch(err){
        next(err);
      };
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
