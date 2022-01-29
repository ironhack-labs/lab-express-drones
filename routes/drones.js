const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((drones)=>{
    console.log(drones)
    res.render("drones/list", { drones });
  })
  .catch((error) => next(error));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body)

  Drone.create(req.body)
  .then((Drone) => {
    res.redirect(`/drones`)
  })
  .catch((error)=>next((error)));
});

router.get("/drones/:id", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("drones/list", { ...drone.toJSON(), detail: true });
    })
    .catch((error) => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
    .then((drone)=> {
      res.render("drones/update-form", drone);
    })
    .catch((error)=> next(error))

});

 router.post('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
   Drone.findByIdAndUpdate(req.params.id, req.body)
   .then((drone)=>{
     res.redirect(`/drones/${drone._id}`);
   })
   .catch((error)=> next(error))
 });



router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;




