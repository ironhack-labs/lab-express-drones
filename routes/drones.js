const express = require('express');
const router = express.Router();

const Dron = require('./../models/Drone.model')


router.get('/drones', (req, res, next) => {

    Dron 
      .find()
      .then(drones => {

        res.render('drones/list',  { drones } )

      })
      .catch(err => console.log(err))
    
      
});

router.get('/drones/create', (req, res, next) => {
  
       
  res.render('drones/create-form')

  
});

router.post('/drones/create', (req, res, next) => {


  const { name, propellers, maxSpeed } = req.body

    Dron 
        .create({ name, propellers, maxSpeed })
        .then(newDron => {
            res.redirect(`/drones`)
        })
        .catch(err => console.log(err))

});

router.get('/drones/:id/edit', (req, res, next) => {
 
  const { id } = req.params

   Dron 
    .findById(id)
    .then(dron=>{
      
      res.render('drones/update-form', dron)

    })
    .catch(err => err)


});

router.post('/drones/:id/edit', (req, res, next) => {
  
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Dron
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(updatedron=>{
        res.redirect('/drones')
    })
    .catch(err => err)

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
