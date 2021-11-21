const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require('../models/Drone.model');

//Use the Mongoose .find() method to retrieve all the drones. 
//Display all the drones on the drones/list.hbs view.
// Make sure you catch the error and output it to the terminal.

router.get('/drones', async (req, res, next) => {
  const drones = await Drone.find()
  res.render('drones/list', {drones})
});

//Find the /drones/create GET route in routes/drones.js and render the drones/create-form.hbs view.

router.get('/drones/create', async (req, res, next) => {
  res.render("drones/create-form.hbs")
});

//Locate the /drones/create POST route in routes/drones.js and using req.body get all the info user submitted through the form.
// Use this info to create a new drone in the database in the drones collection. 
//Make sure you redirect to /drones if the new drone is successfully created. 
//If there is an error, render again the view so the user can try again to create a drone.

router.post('/drones/create', async (req, res, next) => {
  const droneData = req.body;
  await Drone.create(droneData);
  res.redirect("/drones")
});


//Find the /drones/:id/edit GET route in routes/drones.js and render the drones/update-form.hbs view.
 //Make sure you get the right drone from the database using the available id (hint: .findById()) and pass the drone object to the view.

router.get('/drones/:id/edit', async (req, res, next) => {
  const {id}= req.params;
  const drone = await Drone.findById(id)
 res.render("drones/update-form.hbs", {id,drone})
});

router.post('/drones/:id/edit', async (req, res, next) => {
  const {id}= req.params;
  const updateUser= req.body;
  const drone= await Drone.findByIdAndUpdate(id,updateUser);
  res.redirect("/drones")
})

router.post('/drones/:id/delete',async  (req, res, next) => {
  const {id}= req.params;
  const drone = await Drone.findByIdAndDelete(id)
  res.redirect("/drones")
});

module.exports = router;
