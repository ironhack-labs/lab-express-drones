const express = require('express');
const router = express.Router();


const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find().then((drones) => {
    res.render('drones/list', { drones });
  }
  ).catch((error) => {
    console.log(error);
    next();
  }
  )
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  res.render('drones/create-form');


});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed }).then(() => {
    res.redirect('/drones');
  }
  );


});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { id } = req.params;

  Drone.findById(id).then((drone) => {
    res.render('drones/update-form', drone);
  }
  );


});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here


  const { id } = req.params;



  Drone.findByIdAndUpdate(id, req.body).then(() => {

    res.redirect('/drones');
  }
  );




});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const { id } = req.params;

  Drone.findByIdAndDelete(id).then(() => {
    res.redirect('/drones');
  }

  );
});

module.exports = router;
