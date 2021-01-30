const Drone = require("../models/Drone.model");

module.exports.list = (req, res, next) => {
  
    Drone.find()
    .then((drones) =>res.render("drones/list",{drones}))
    .catch((e) => next(e))
  };
// Iteration #3: Add a new drone
    // ... your code here
  module.exports.create = (req, res, next) => {
    
    res.render("drones/create-form");
  
  };

  module.exports.doCreate = (req,res,next) => {
      Drone.create(req.body)
      .then((drones) => res.redirect('/drones/'))
      .catch((e) =>res.render("drones/create-form"))
  };


  // Iteration #4: Update the drone
  // ... your code here

  module.exports.edit = (req,res,next) => {
    Drone.findById(req.params.id)
    .then((drone) => res.render("drones/update-form",{drone}))
    .catch((e) => next(e))
  };

  module.exports.doEdit = (req,res,next) => {
      Drone.findByIdAndUpdate(req.params.id,req.body)
      .then((drone) => res.redirect('/drones/'))
      .catch((e) =>res.render("drones/update-form",{drone: req.body}))
};

  // Iteration #5: Delete the drone
    // ... your code here

    module.exports.delete =(req,res,next) => {
        Drone.findByIdAndDelete(req.params.id)
        .then((drone) => res.redirect('/drones/'))
        .catch((e) => console.log (e))
    }


