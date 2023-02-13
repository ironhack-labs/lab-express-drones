const express = require('express');
const router = express.Router();


// require the Drone model here
const Drone = require("../models/Drone.model");

// Iteration #2: List the drones
router.get('/drones', async (req, res, next) => {
  try {
    let drones = await Drone.find();
    res.render('drones/list.hbs', {drones})
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Iteration #3: Add a new drone
router.get('/drones/create', (req, res, next) => res.render('drones/create-form.hbs'));

router.post('/drones/create', async (req, res, next) => {
  try {
    const {name, propellers, maxSpeed} = req.body;
    await Drone.create({name, propellers, maxSpeed})
    res.redirect('/drones');
  } catch (error) {
    console.log(error);
    res.render('drones/create-form')
    next(error);
  }
});

// Iteration #4: Update the drone
router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const {id} = req.params;
    const drone = await Drone.findById(id);
    res.render('drones/update-form.hbs', drone)
  } catch (error) {
    console.log(error);
    next(error);
  }

});


router.post('/drones/:id/edit', async (req, res, next) => {
  try {
    const {id} = req.params;
    const {name, propellers, maxSpeed} = req.body;
    await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed});
    res.redirect('/drones')
  } catch (error) {
    console.log(error);
    res.render('drones/update-form.hbs')
    next(error); 
  }
});



router.post('/books/:id/edit', async (req, res, next) => {
  try {
      const { id } = req.params;
      const { title, description, author, rating } = req.body;

      await Book.findByIdAndUpdate(id, { title, description, author, rating });
      res.redirect(`/books/${id}`);
  } catch (error) {
      console.log(error);
      next(error); 
  }
})

  // Iteration #5: Delete the drone
router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    const {id} = req.params;
    await Drone.findByIdAndDelete(id);
    res.redirect('/drones')
  } catch (error) {
    console.log(error);
    next(error); 
  }
});

module.exports = router;
