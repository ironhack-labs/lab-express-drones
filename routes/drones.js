
const express = require('express');

const router = express.Router();

const Drones = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {

    let drones = await Drones.find()
    // render the view with the information, here we are sending to the front end

    res.render("drones/drones-list", {drones})

} catch(error) {
    console.log(error) 
    next(error)
}
});

router.get('/drones/create', (req, res, next) => res.render("drones/create-form"));
  // Iteration #3: Add a new drone

  router.post("/drones/create", async(req,res,next)=> {
    
    try {
        const {name, propellers,speed} = req.body
        await Drones.create ({name, propellers,speed})
       
        res.redirect(`/drones/`) 
    
    } catch (error) {
        console.log(error)
        next(error)
    }
    });

    //Drone details
    router.get('/drones/:id/', async(req, res, next) => {
      
      try {
        const {id} = req.params;
        const drone = await Drones.findById(id);
        res.render("drones/drones-details", drone);
    
    } catch (error) {
        console.log(error)
        next(error)
    }
    });


router.get('/drones/:id/edit', async(req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const {id} = req.params;
    const drone = await Drones.findById(id);
    res.render("drones/update-form", drone);

} catch (error) {
    console.log(error)
    next(error)
}
});

router.post('/drones/:id/edit', async (req, res, next) => {
  
  try {
    const {id} = req.params;
    const {name,propellers,maxSpeed} = req.body;
    await Drones.findByIdAndUpdate(id,{name,propellers,maxSpeed}) 

    res.redirect(`/drones`) 

} catch (error) {
    console.log(error);
    next(error);

}
});

router.post('/drones/:id/delete', async(req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const {id} = req.params;
    await Drones.findByIdAndDelete(id);
    res.redirect("/drones");
    
}catch(error) {
    console.log(error);
    next(error);
}
});

module.exports = router;
