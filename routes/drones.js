const express = require('express');
const router = express.Router();

const Drones = require("../models/Drone.model");

router.get('/drones', async (req, res, next) => {
try {
  const drones = await Drones.find();
  res.render('drones/list', { drones });
} catch(error) {
  console.log(error);
}
});

router.get('/drones/create', (req, res, next) => {
  const { id } = req.params;
  Drones.findById(id)
    .then(droneToEdit => {
      console.log(droneToEdit);
    })
    .catch(error => next(error));
});
  

router.post('/drones/create', (req, res, next) => {
  router.get('/create', (req, res, next) => {
    res.render('drones/create-form.hbs');
  })
  
  router.post('/create', async (req, res) => {
    try {
      const { name, propellers, maxSpeed } = req.body;
      await Drones.create({
        name,
        propellers,
        maxSpeed,
      })
      res.redirect("/drones");
    } catch (error) {
      next(error);
    }
  
  })});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
		const { id } = req.params;
		const drone = await Drones.findById(id);
		res.render('drones/update-form.hbs', drone);
	} catch (error) {
		next(error);	
	}
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
		const { id } = req.params;
		const { name, propellers, maxSpeed } = req.body;
		await Drones.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true });

		res.redirect("/drones");
	} catch(error){
		console.log(error);
	}});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
		const { id } = req.params;
		await Drones.findByIdAndDelete(id);
		res.redirect('/drones');
	
	} catch (error) {
		next(error);
	}
});

module.exports = router;
