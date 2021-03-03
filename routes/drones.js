const express = require('express');

const myDronesModel = require('./../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  myDronesModel.find()
  .then((dbResponse) => {
    res.render('./../views/drones/list.hbs', {myDrones: dbResponse})
  })
  .catch((dbError) => {
    next(dbError);
  })

});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
res.render('./../views/drones/createForm.hbs')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  
const {name, propellers, maxSpeed} = req.body;
console.log("bbbbbbb");
// let newDrone;
// if(req.file){
//   newDrone = req.file.path;
// }


try {
  await myDronesModel.create({
    name,
    propellers,
    maxSpeed
  });
  res.redirect("/drones");
} catch (err) {
  next(err);
}

});
console.log("WRONG--------------HERE--------------------DANGER");

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
  res.render('./../views/drones/updateForm.hbs')
  myDronesModel.findById(req.params.id)
  
  .then((drone) => {
    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEreee");
  
    res.render("./../views/drones/updateForm.hbs", {drone});

  })
  .catch((dbError) => {
    next(dbError)
  })
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body;
  try{
    await myDronesModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed

    });
    res.redirect("/drones")
  } catch (err){
    next(err)
  }
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
