const express = require('express');
const router = express.Router();
const Drones = require("../models/Drones.model")


// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find().then((allDrones) => {
    console.log(allDrones);
    res.render('drones/list', { drones: allDrones });
  })
  .catch((err) => console.log(err));
});



router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('views-drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  Drones.create({name, propellers, maxSpeed})
  
  .then(() => res.redirect('/drones'))
  .catch((err) => console.log(err));
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
const {id} = req.params;
Drones.findById(id).then((TheDrones) => {
  res.render('views-drones/create-form-edit', {drones: TheDrones})
}).catch((err) => {
  next(err);
})
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
  const { id } = req.params;
  const {name, propellers, maxSpeed} = req.body
  Drones.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true}).then((updatedDrones) => {
    res.redirect(`/drones/${updatedDrones._id}`);
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone

  const {id} = req.params;
  Drones.findByIdAndDelete(id).then(() => {
  res.redirect("/drones")

})
});

module.exports = router;
