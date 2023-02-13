const express = require('express');
const router = express.Router();


// require the Drone model here

const Drone = require("../models/Drone.model");

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  
    try {
      // Book.find() without any arguments retrieves an array with all the books from the db
      let drones = await Drone.find(); // find is a method, always returns an array
  
      //render the view with the information
      res.render("drones/list", {drones}); // because it's an array, get the books and send to the frontend

    } catch (error) {
      next(error);
    }
  });  


router.get('/drones/create', (req, res, next) => res.render("drones/create-form"));
  // Iteration #3: Add a new drone
  // ... your code here
 

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    //extract info from req.body

    const {name, propellers, maxSpeed} = req.body; // use the same names

    //create the book in the db
    await Drone.create({name, propellers, maxSpeed}); // order os properties doesn't matter - more descriptive this way.

    //await Book.create(req.body) - Shorter version

    //redirect to the list again
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
    try {
      const { id } = req.params;
      const drone = await Drone.findById(id);
      res.render("drones/update-form", drone);

    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
    try {
      const { id } = req.params;
      const {name, propellers, maxSpeed} = req.body; //because it's a post route we have access to req.body
  
      await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}); //accepts the id we want to search for, an object with the information we want to update // can be req.body instead of all the information.
  
      res.redirect(`/drones`); //it's what we have on the variable above.
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.post('/drones/:id/delete', async(req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
    try {
      // does 2 things, deletes the book, and redirects us to the list view
  
      const { id } = req.params;
      await Drone.findByIdAndDelete(id); // Await is VERY important, otherwise it will redirect before deleting the book
      res.redirect("/drones");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

module.exports = router;
