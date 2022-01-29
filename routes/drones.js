const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(drone => {
      console.log(drone)
      res.render('drones/list', {drone});
  })
  .catch((err) => console.log('Something went wrong!',err));


});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");


});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
  .then((drone) => {
    res.redirect(`/drones/${drone._id}`);
  })
  .catch((e) => next(e));

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then((drone) => {
    res.render("drones/update-form", drone);
  })
  .catch((e) => next(e));




});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code hererr


  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then((drone) => {
      res.redirect(`/drones`);
    })
    .catch((e) => next(e));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones");
  })
  .catch((e) => next(e));

});

module.exports = router;
