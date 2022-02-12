const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  Drone.find().then(allDrones => {
    res.render('drones/list.hbs', {drones: allDrones});
  }) .catch (error => {
    console.log(error);
})

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({name, propellers, maxSpeed})
  .then(createdDrone => { 
      console.log(`Drone created: ${createdDrone}`)
  res.redirect('/drones')
})
  .catch(error => console.log(error))
}) 

router.get('/drones/:id/edit', (req, res, next) => {
  const {droneId} = req.params;
  Drone.findById(droneId)
  .then(drone => {
      res.render("drones/update-form.hbs", {drone})
  }) .catch (error => console.log(error))
})
;


router.post('/drones/:id/edit', (req, res, next) => {
  const {droneId} = req.params;
  const {name, propellers, maxSpeed} = req.body;

  //get a book by its ID and edit the values
  Book.findByIdAndUpdate(bookId, {name, propellers, maxSpeed},
      {new: true}
  )
 
  .then(updatedDrone => {
      console.log(updatedDrone) 
      res.redirect(`/drones/${updatedDrone._id}`)})
 
  .catch(error => console.log(error))
})

router.post('/drones/:id/delete', (req, res, next) => {
  const {droneId} = req.params;
  Drone.findByIdAndDelete(droneId)
  .then(() => res.redirect("/drones"))
  .catch(error => console.log("error"))
})

module.exports = router;
