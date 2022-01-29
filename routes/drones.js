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


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const{id} = req.params
  Drone.findById(id)
    .then((drone)=> {
      res.render("drones/update-form", drone);
    })
    .catch((error)=> next(error))

});

 router.post('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
  const { id } = req.params
  const {name, propellers, maxSpeed} = req.body;
   Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
   .then((drone)=>{
     console.log(drone)
     res.redirect(`/drones`);
   })
   .catch((error)=> next(error))
 });

 router.get("/books/:id/delete", (req, res, next) => {
   const{ id } = req.params

  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((error) => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const{ id }=req.params

  Drone.findOneAndDelete(id)
  .then(drone => {
    console.log(drone)
    res.redirect('/drones');
  })
  .catch((error) => next(error))
});

module.exports = router;




