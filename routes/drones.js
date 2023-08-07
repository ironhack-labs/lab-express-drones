const express = require('express');
const router = express.Router();


const Drone = require("../models/Drone.model.js");

/* GET DISPLAY */
// require the Drone model here
router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    let allDronesFromDb = await Drone.find();
    res.render("drones/list.hbs", { drones: allDronesFromDb });
  }
  catch(error) {
    console.log("Error while getting Drones", error);
  }
});



/* ADD */
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form.hbs');
});




router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
    try{
    //Object destructuring with req.body
    // There's always a match between an inpiut's name and a re.body properties name
    const {name, propellers, maxSpeed} = req.body;

    await Drone.create({name, propellers, maxSpeed})
        res.redirect('/drones')

    }
    catch(error) {
        console.log(error);
    }
    
});







router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {droneId} = req.params
    let foundDrone = await Drone.findById(droneId);
    res.render('drones/update-form.hbs', {drones: foundDrone});
    }
    catch(error) {
        console.log(error);
    }
});



router.post('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{ 
    // destructure the req.params object to get bookId
    const {droneId} = req.params;
    const {name, propellers, maxSpeed} = req.body;

    //update the same document with new content
    await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new:true});

    //redirect to books list page
    res.redirect('/drones');
}
catch(error) {
    console.log(error);
}
});





router.post('/drones/:droneId/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try{
    const {droneId} = req.params;
    await Drone.findByIdAndDelete(droneId);
    res.redirect('/drones');
    }
    catch(error){
        console.log(error);
    }


});

module.exports = router;
