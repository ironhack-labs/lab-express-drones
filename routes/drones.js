const express = require('express');
const router = express.Router();
// require the Model --> Movie.model.js
const Drone = require("../models/Drone.model.js");

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    // CRUD - Read
    const dronesFromDB = await Drone.find();
    console.log('Retrieved drones from DB', dronesFromDB);
    // find --> result is an array, 
    // so we need the curly brackets to convert into an object and pass it to hbs{ drones }
    //res.send(dronesFromDB)
    res.render('drones/list.hbs', {
       drones: dronesFromDB
     });
  } catch (err) {
    console.log('Error while getting the movies from the DB: ', error);
    // Call the error-middleware to display the error page to the user
    next(error);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // Show the information to the user
  try {
    res.render('drones/create-form.hbs');

  } catch (error) {
    console.log('Error while getting the movies from the DB: ', error);
    // Call the error-middleware to display the error page to the user
    next(error);
  }
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    // get all the info from the FORM
    //const {name, propellers, maxSpeed} = req.body;
    //res.send(req.body)
    const drone = req.body;
    // CRUD - Create 
    const newDrone = await Drone.create(drone);
    console.log("new drone", newDrone);
    res.redirect("/drones");

  } catch (error) {
    console.log('Error while getting the movies from the DB: ', error);
    // Call the error-middleware to display the error page to the user
    next(error);
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params;
    //res.send(id)
    const drone = await Drone.findById(id);
    // upadateDrone is an object, so we can pass it without brackets
    res.render('drones/update-form.hbs', drone);

  } catch (error) {
    console.log('Error while getting the movies from the DB: ', error);
    // Call the error-middleware to display the error page to the user
    next(error);
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params;
    const updatedData = req.body;
    console.log("req.body", req.body);
    //res.send(req.body)
    const updateDrone = await Drone.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    console.log("updated", updateDrone);
    res.redirect("/drones");
    } catch (error) {
      console.log('Error while getting the movies from the DB: ', error);
      // Call the error-middleware to display the error page to the user
      next(error);
    }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const { id } = req.params;
    await Drone.findByIdAndDelete(id);
   
    res.redirect('/drones')
  } catch (error) {
    console.log('Error while getting the movies from the DB: ', error);
    // Call the error-middleware to display the error page to the user
    next(error);
  }
   
});

module.exports = router;
