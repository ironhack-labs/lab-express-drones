const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model.js'); // <== add this line before your routes

router.get('/search', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  const {query} = req.query;
  console.log(query);
  Drone.find({name:query})
  .then(drones => res.render('search.hbs', {query,drones}))
  .catch(err => console.log(`Error loading drones : ${err}`));

});

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(drones => res.render('drones/list.hbs', {drones}))
  .catch(err => console.log(`Error loading drones : ${err}`));

});

router.get('/drones/create', (req, res, next) => res.render('drones/create-form.hbs'));

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name,propellers,maxSpeed} = req.body;

  Drone.create({name,propellers,maxSpeed})
  .then( drone => res.redirect('/drones/'))
  .catch(err => console.log(`Error creating drone : ${err}`));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  Drone.findById(id)
  .then( drone => res.render('drones/update-form.hbs',{drone}))
  .catch(err => console.log(`Error updating drone : ${err}`));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  const {name,propellers,maxSpeed} = req.body;

  Drone.findByIdAndUpdate(id,{name,propellers,maxSpeed})
  .then( () => res.redirect(`/drones/${id}/edit`))
  .catch(err => console.log(`Error updating drone : ${err}`));

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params;

  Drone.findByIdAndDelete(id)
  .then( () => res.redirect(`/drones/`))
  .catch(err => console.log(`Error Deleting drone : ${err}`));
});

module.exports = router;
