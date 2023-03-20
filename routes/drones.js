const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

// Iteration #2
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
		.then((dronesArr) => {
			const data = { drones: dronesArr };
			res.render("drones/list", data);
		})
		.catch((e) => {
			console.log("error getting drone from DB", e);
			next(e);
		});
});


// Iteration #3
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req)
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  Drone.create(droneDetails)
  .then(droneFromDB => {
    res.redirect("/drones");
  })
  .catch(e => {
    console.log("error", e)
    next(e);
  });
});

// Iteration #4
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  Drone.findById(id)
  .then(droneToEdit =>{
    console.log(droneToEdit)
    res.render(`drones/update-form.hbs`,{drone:droneToEdit})
  })
  .catch(e => {
    console.log("error finding drone", e);
    next(e);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect(`/drones`)) 
    .catch(error => next(error));
});


// Iteration #5
router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
 36  
seeds/drones.seed.js
@@ -1 +1,37 @@
// Iteration #1
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";

const drones = [
    {
        name: "Creeper XL 500",
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18
    }
];

mongoose
.connect(MONGO_URI)
.then(x=>{
    console.log(`Connected to Mongo database:"${x.connections[0].name}"`)
    return Drone.create(drones)
})
.then(dronesFromDB=>{
    console.log(`Created ${dronesFromDB.length} drones`);
    return  mongoose.connection.close()
})
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });