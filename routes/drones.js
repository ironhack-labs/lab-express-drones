const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('./../models/Drone.model')


router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then((drones) => {
      // res.send(drones)
      res.render("drones/list", { drones })
    })
    .catch(err => console.log(err))

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone
    .create()
    .then((drone) => {
      // res.send(drones)
      res.render("drones/create-form.hbs", { drone })
    })
    .catch(err => console.log(err))
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone


  // res.send(req.body)

  const { name, propellers, maxSpeed } = req.body
  Drone
    .create({ name, propellers, maxSpeed })
    .then((drone) => {
      // res.send(drones)
      res.redirect("/drones")
    })
    .catch(err => {
      console.log(err)
      res.redirect("/drones/create")
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone
    .findById(req.params.id)
    .then((drone) => {
      // res.send(drone)
      res.render("drones/update-form", drone)
    })

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  Drone
    .findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then((drone) => {
      // res.send(drone)
      res.redirect("/drones")
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/drones/${req.params.id}/edit`)
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone

  Drone
    .findByIdAndDelete(req.params.id)
    .then((drone) => {
      res.redirect("/drones")
    })
    .catch(err => {
      console.log(err)
    })


});

module.exports = router;
