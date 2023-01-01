const express = require('express');
const router = express.Router();


// require the Drone model here
const Drone = require('../models/Drone.model');






router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => {
      res.render('drones/list', { drones: dronesFromDB});
    })
    .catch(err => {
      console.log("Error getting drones from DB", err);
      next();
    })
});

// Bonus to can check a singular drone
router.get("/drones/:droneId/", (req, res, next) => {
  const id = req.params.droneId;
  Drone.findById(id)
    .then( droneDetails => {
        res.render("drones/drone-details", droneDetails)
    })
    .catch( err => {
        console.log("error getting drone details from DB", err);
        next();
    })
});


router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
}

return Drone.create(droneDetails)    
  .then((droneDetails) => {
    res.redirect("/drones")
  })
  .catch(err => {
      console.log("error creating new drone DB", err);
      next();
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
	const { id } = req.params;
	Drone.findById(id)
		.then((drone) => {
			res.render('drones/update-form', drone);
		})
    .catch(err => {
      console.log("Error getting drone details from DB...", err);
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
	const { name, propellers, maxSpeed } = req.body;
	const { id } = req.params;

	Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
		.then(() => {
			res.redirect('/drones');
		})
    .catch(err => {
      console.log("Error updating the drone...", err);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
      res.redirect("/drones");
  })
  .catch(err => {
      console.log("error deleting book...", err);
  })
});

module.exports = router;
