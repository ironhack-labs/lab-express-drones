const express = require('express');
const DroneModel = require('../models/Drone.model');
const { format } = require('morgan');

// require the Drone model here

const router = express.Router();


router.get("/", (req, res) => {
  res.render("index.hbs")
})


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
       res.render("drones/list.hbs", {drones})
    })
    .catch(() => {
      console.log("An ERROR occured!")
    })
     
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("./drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
    .then(() => {
      res.redirect("/drones")   
    })
    .catch(() => {
       res.render("./drones/create-form.hbs")
    })
})


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
     .then((result) => {
         res.render("drones/update-form.hbs", {result})
  })
    })


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let {name, propellers, maxSpeed} = req.body
  let droneId = req.params.id
  DroneModel.findByIdAndUpdate(droneId, {$set: {name, propellers, maxSpeed}})
      .then(() => {
           res.redirect('/drones')
      })
      .catch((drones) => {
         res.render("./drones/update-format.hbs")
      })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
    DroneModel.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect("/drones")
    })

})

module.exports = router;
