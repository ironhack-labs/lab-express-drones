const express = require('express');

// require the Drone model here
const DroneModel = require('../models/Drone.models')//.. to go out of the folder / means entering 

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones // we have to find them
  DroneModel.find()
    .then((drone) => {
        console.log('my drone is ', drone)
        res.render('drones/list.hbs', {drone})
    })
    .catch((err) => {
        console.log('Not working sorry')
    })
  
  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')// render nevers starts with a slash
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log('working post', req.body)
  //req.body is what we submit in the form

  DroneModel.create(req.body)
  .then(() => {
      console.log('Data Added')
      //once its added redirect the user to the homepage
      res.redirect('/drones')
  })
  .catch((err) => {
    console.log('There is an error', err)
    res.redirect('/drones/create') //just show the url you would like to redirect
  })
})








router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    let id = req.params.id
      
    DroneModel.findById(id)
    .then((drone) => {
        console.log('Drone Edit', drone)
        res.render('drones/update-form.hbs', {drone})
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
      let id = req.params.id

      DroneModel.findByIdAndUpdate(id, { $set: req.body })
      //after this task is complete, I want to redirect the page
      .then(() => {
          console.log()
          res.redirect('/drones')
      })
      .catch((err) => {
        console.log('There is an error', err)
        res.redirect('/drones/{{ drone._id }}/edit') //just show the url you would like to redirect
      })    
});






router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let id = req.params.id
    
  DroneModel.findByIdAndDelete(id)
  .then(() => {
      console.log('Drone Deleted')
      res.redirect('/drones')
  })
});

module.exports = router;
