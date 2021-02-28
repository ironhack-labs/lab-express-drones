const express = require('express');
const router = express.Router();

// require the Drone model here
const droneModel = require("./../models/Drone.model");



router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  droneModel.find()
  .then((allDrones)=> {
    //console.log("list", allDrones);
    res.render("drones/list.hbs",{drones: allDrones});
  })
  .catch((error) =>{
    console.log(error);
  });

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs");
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  //console.log(req.body);
  const { name, propellers, maxSpeed} = req.body;
  //console.log(name,propellers,maxSpeed);
  try {
    await droneModel.create({
      name,
      propellers,
      maxSpeed,
    });
    //.then (newDrone=> console.log(`New Drone created: ${newDrone.name}.`))
   // .catch(error => console.log(`Error while creating a newdrone:`,error));
    res.redirect("/drones/add-drone");
  }catch(err){
    next(err);
 }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  droneModel.findById(req.params.id)
  .then(drone =>{
    console.log(drone);
    res.render("drones/oneDroneId",{drone});
  })
  .catch(error => next(error));
});
router.get("/add-drone",(req,res,next)=>{
  res.render("create-form");
});

router.get('/drones/:id/edit',(req,res)=>{
  droneModel.findById(req.params.id)
  .then (drone=> {
    res.render('drones/update-form.hbs',{ UpdatedDrone: drone});

  })
  .catch (error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {name, propellers, maxSpeed } = req.body;
  droneModel.findByIdAndUpdate(req.params.id,
    {name, propellers,maxSpeed},{new:true})
  .then(updatedDrone => {
    res.redirect("/drones");
  })
  .catch(error => next(error));

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  droneModel.findByIdAndDelete(req.params.id)
  .then(() => res.redirect ('/drones'))
  .catch(error => next(error));

});

module.exports = router;
