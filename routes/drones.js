const express = require('express');

const droneModel = require('../models/Drone.models')

const router = express.Router();

router.get('/drones', (req, res, next) => {
   droneModel.find()
   .then((drone) =>{
     res.render('drones/list.hbs',{drone})
   })
   .catch(() => {
     console.log("Unable to retrieve the DATA")
   })

 
});

router.get('/drones/create', (req, res, next) => {
   res.render('drones/drone-create.hbs')

});

router.post('/drones/create', (req, res, next) => {
   droneModel.create(req.body)
   .then(() =>{
    res.redirect('/drones')
   })
   .catch(() => {
    res.render('drones/drone-create.hbs')
  })

});

router.get('/drones/:id/edit', (req, res, next) => {
   let id = req.params.id
   droneModel.findById(id)
   .then((drone) => {
    res.render('drones/update-form',{drone})
   })
   .catch(() => {
        console.log('The ID doesnt exist')
   })
});

router.post('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id
  droneModel.findByIdAndUpdate(id, {$set: req.body})
  .then(() => {
    res.redirect('/drones')
  })
  .catch((error) => {
    res.redirect('/drones/'+ id + "/edit")
    console.log(error)

  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  let id = req.params.id
  droneModel.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(() => {
    console.log("Couldn't delete a drone")
  })
});

module.exports = router;
