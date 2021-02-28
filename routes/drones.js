const express = require('express');

// require the Drone model here

const router = express.Router();
const DroneModel = require("./../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  console.log("this is req params:", req.params);
  DroneModel.find()
    .then((dbRes) => {
      // console.log(dbRes);
      res.render("drones/list.hbs", { drones: dbRes });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

    DroneModel.find()
      .then((dbRes) => {
        res.render("drones/drone-create", {
          drones: dbRes,
        });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("create-form");
  // TO DO: #3.3 Locate the /drones/create POST route in routes/drones.js and 
  // using req.body get all the info user submitted through the form. 
  // Use this info to create a new drone in the database in the drones collection.
  // Make sure you redirect to /drones if the new drone is successfully created. 
  // If there is an error, render again the view so the user can try again to create a drone.
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  DroneModel.findById(req.params.id)
    .then((drones) => res.render("edit-drones", { drones }))
    .catch(next);
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, email, favLangage, isRegistered } = req.body; // destructuring syntax here !!!!
  try {
    await HackerModel.findByIdAndUpdate(req.params.id, {
      name,
      email,
      favLangage,
      isRegistered: isRegistered === "on",
    });
    res.redirect("/hackers");
  } catch (err) {
    next(err);
  }
  // res.send("work in progress...");
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
