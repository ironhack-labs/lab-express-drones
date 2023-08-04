const express = require('express');
const router = express.Router();

// ----------- [DRONE MODEL REQUISITION] -----------

// require the Drone model here

const Drone = require('../models/Drone.model')

router.get('/drones', (req, res) => {

  // ----------- [DRONE LIST] -----------

  // Iteration #2: List the drones
  // ... your code here

  Drone

    .find()

    .then(

      //console.log("drones test")
      //listDrones => res.send(listDrones)
      listDrones => res.render('drones/list', { listDrones })

    )

    .catch(err => console.log(err))
})

// ----------- [NEW DRONE RENDER] -----------

// Iteration #3: Add a new drone 
// ... your code here

router.get('/drones/create', (req, res) => {

  res.render("drones/create-form")


});

// ----------- [NEW DRONE HANDLER] -----------

// Iteration #3: Add a new drone
// ... your code here

router.post('/drones/create', (req, res) => {

  const { name, propellers, maxSpeed } = req.body

  Drone

    .create({ name, propellers, maxSpeed })

    .then(

      //console.log("new drone created")
      drone => res.redirect('/drones')

    )

    .catch(err => console.log(err))
})

// ----------- [UPDATE RENDER] -----------

// Iteration #4: Update the drone
// ... your code here

router.get('/drones/:id/edit', (req, res) => {

  const { id } = req.params

  Drone

    .findById(id)

    .then(

      //console.log("editing a drone")
      drone => res.render("drones/update-form", drone)

    )

    .catch(err => console.log(err))

});




// ----------- [UPDATE HANDLER] -----------

// Iteration #4: Update the drone
// ... your code here

router.post('/drones/:id/edit', (req, res) => {

  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone

    .findByIdAndUpdate(id, { name, propellers, maxSpeed })

    .then(

      //console.log("drone updated")
      drone => res.redirect('/drones')

    )

    .catch(err => console.log(err))

});



// ----------- [DELETE DRONE] -----------

// Iteration #5: Delete the drone
// ... your code here

router.post('/drones/:id/delete', (req, res) => {

  const { id } = req.params

  Drone

    .findByIdAndDelete(id)

    .then(() => res.redirect('/drones'))

    .catch(err => console.log(err))

})

module.exports = router;
