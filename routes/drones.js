const express = require('express');
const router = express.Router();

// require the Drone model here
const Drones = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
try {
  
  let drones = await Drones.find();

  res.render("drones/list", { drones })

/* ---------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1---------------------- */

} catch (error) {
  console.log(error);
  next(error);
}

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    
    const {name, propellers, maxSpeed} = req.body;

    await Drones.create ({name, propellers, maxSpeed});

    res.redirect('/drones')

  } catch (error) {
    console.log(error)
    next(error);
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
try {
  
  const {id} = req.params;
  const drones = await Drones.findById(id);
  res.render("drones/update-form", drones)

} catch (error) {
  console.log(error)
  next(error); 
}
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  try {
    const {id} = req.params;
    const {name, propellers, maxSpeed} = req.body;

    await Drones.findByIdAndUpdate(id, req.body)
 
    res.redirect(`/drones`)

  } catch (error){
    console.log(error)
    next(error);
  }


});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
try {
  
  const {id} = req.params;
  const drones = await Drones.findByIdAndRemove(id)


  res.redirect("/drones")
  
} catch (error) {
  console.log(error)
  next(error)
}


});


module.exports = router;
