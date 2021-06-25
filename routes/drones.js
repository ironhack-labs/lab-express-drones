const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {

    // do not start with a slash in render methods 

    DroneModel.find()
      .then((drones) => {
          res.render('drones/list.hbs', {drones}) // ----> render() accepts a path to your views file
      })
      .catch(() => {
            next('drones fetch failed')
      })


});

router.get('/drones/create', (req, res, next) => {
    res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const {name,propellers,maxSpeed} = req.body

  // Add this to our DB 
  DroneModel.create({name,propellers,maxSpeed })
      .then(() => {
          // send the user to a specific url
          res.redirect('/drones/create')
      })
      .catch(() => {
          next('Create failed')
      })

})

router.get('/drones/:id/edit', (req, res, next) => {

    let id = req.params.id

    DroneModel.findById(id)
    .then((drone)=>{
        res.render('drones/update-form.hbs',{drone})
        console.log(drone)
    })
    .catch(()=>{
        next("Finding specific todo failed.")
    })




});


router.get('/drones/:id/delete', (req, res, next) => {

    let id2 = req.params.id
    
    DroneModel.findByIdAndDelete(id2)
    .then(()=>{

        res.redirect('/drones')//start with a / because we are redirecting the user to a url 
    })
    .catch(()=>{
        next("Deleting specific todo failed")
    })

});

module.exports = router;
