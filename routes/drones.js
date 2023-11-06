const express = require('express');
const router = express.Router();

const Drone = require("./../models/Drone.model")

router.get('/drones', (req, res, next) => {

  Drone
    .find()
    .then(drones => res.render("drones/list", { drones }))
    .catch(err => console.log("The error while searching albums occurred", err))



});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
}

);

router.post('/drones/create', (req, res, next) => {
  const { name, maxSpeed, propellers } = req.body
  //res.send(req.body)
  Drone
    .create({ name, propellers, maxSpeed })
    .then(drones => res.redirect("/drones"))
    .catch(err => console.log(err))


});

router.get('/drones/:id/edit', (req, res, next) => {


  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))
})


router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params
  Drone
    .findbyIdAndUpdate(id)
    .then(drone => res.render('drones/', drone))

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
