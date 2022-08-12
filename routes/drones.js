const express = require('express');
const Drones = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find()
    .then((drones) => {
      console.log(drones);
      res.render('drones/list', {
        drones: drones
      });
    })
    .catch((err) => {
      next(err);
    });
    
});

router.get('/drones/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  //Render the drone create form
  res.render('drones/create-form');  
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  //Fetch the data from the form
const drone = req.body;
 Drones.create(drone)
    .then((drone) => {
      //redirect to  the list of drones
      res.redirect('/drones');
    }
    )
    .catch((err) => {
      //redirect back to the form with the error message
      res.render('drones/create-form', {
        errorMessage: err.message
      });
    }
    );
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  drone = req.params.id;
  Drones.findById(drone)
    .then((drone) => {
      console.log(drone);
      res.render('drones/update-form', {
        drone
      });
    }
    )
    .catch((err) => {
      next(err);
    }
    );
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drones.findByIdAndUpdate(req.params.id, req.body)
    .then((drone) => {
      res.redirect('/drones');
    }
    )
    .catch((err) => {
      next(err);
    }
    );
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drones.findByIdAndRemove(req.params.id)
    .then((drone) => {
      res.redirect('/drones');
    }
    )
    .catch((err) => {
      next(err);
    }
    );
});

module.exports = router;
