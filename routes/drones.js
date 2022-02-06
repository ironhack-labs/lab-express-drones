const express = require('express');
const router = express.Router();
const app = require("../app")

const Drone = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))
});


// //makes adding input fields possible

// in the v2.0 this is done by manipulating the existing DOM instead of 
//dynamic generation


// let fields = [];
// //makes adding input fields possible
// function addField() {
//   const item = "token"
//   fields.push(item)
//   console.log(fields)
// }

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  //v1.0
  //addField()
  res.render("drones/create-form",
    // { fields }
  )

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  //v1.0
  ////fields = []
  const { name, img, manufacturer, propellers, maxSpeed, weaponSystems } = req.body
  Drone
    .create({ name, img, manufacturer, propellers, maxSpeed, weaponSystems })
    .then(() => res.redirect('/drones'))
    .catch(err => {
      res.render("drones/create-form")
      console.log(err)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

  const { id } = req.params

  //code added to be able to add weapons to already existing ones
  let { name, img, manufacturer, propellers, maxSpeed, weaponSystems } = req.body

  Drone
    .findByIdAndUpdate(id, { name, img, manufacturer, propellers, maxSpeed, weaponSystems }, { new: true })

    // .findById(id)
    .then(drone => res.render("drones/update-form", drone))
    .catch(err => console.log(err)
    )
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

  //v1.0
  ////fields = []

  const { id } = req.params
  let { name, img, manufacturer, propellers, maxSpeed, weaponSystems } = req.body
  //v1.0
  //deletes weapons whose value is "..."
  // weaponSystems.forEach((elm, idx) => {
  //   if (!elm) {
  //     weaponSystems.splice([idx], 1)
  //   }

  // });

  Drone
    .findByIdAndUpdate(id, { name, img, manufacturer, propellers, maxSpeed, weaponSystems }, { new: true })

    .then(() => res.redirect("/drones"))
    .catch(err => console.log(err)
    )
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params
  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch(err => console.log(err)
    )

});

module.exports = router;
