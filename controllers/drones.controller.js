const Drone = require('../models/Drone.model')

// Read
module.exports.list = (req, res, next) => {
    Drone.find()
      .then(dronesFound => res.render('drones/list', { drones: dronesFound }))
      .catch(err => next(err))
  }

// Create
module.exports.create = (req, res, next) => res.render('drones/create-form');
 
module.exports.doCreate = (req, res, next) => {
    const { name, propellers, maxSpeed } = req.body;
  
    Drone.create( {name, propellers, maxSpeed} )
      .then(() => res.redirect('/drones'))
      .catch(err => next(err))
  };

// Update
module.exports.edit = (req, res, next) => {
    const { id } = req.params;
    Drone.findById(id)
      .then(foundDrone => res.render('drones/update-form', foundDrone))
      .catch(err => next(err))
};

module.exports.doEdit = (req, res, next) => {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;
  
    Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
      .then(droneToUpdate => res.redirect('/drones'))
      .catch(error => res.redirect(`/drones/${id}/edit`));
  };

// Delete
module.exports.delete = (req, res, next) => {
    const { id } = req.params;
  
    Drone.findByIdAndDelete(id)
      .then(() => res.redirect('/drones'))
      .catch(err => next(err))
  }
