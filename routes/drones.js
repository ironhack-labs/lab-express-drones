const express = require("express");

// require the Drone model here
const DroneModel = require("../models/Drone.models"); //.. to go out of the folder / means entering

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones // we have to find them
  DroneModel.find()
    .then((drone) => {
      console.log("my drone is ", drone);
      res.render("drones/list.hbs", { drone });
    })
    .catch((err) => {
      console.log("Not working sorry");
    });
});


// GET route that will show the form to create new drones
router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs"); // render nevers starts with a slash
});


// POST route that will get info from form and create a new drone in the DB
router.post("/drones/create", (req, res, next) => {
  console.log("working post", req.body);
  //req.body return an object whith what we submited in the form
  //req.body will be everything filled by the user in the create form view. the .create() method will use the data to create the element.
  //Now we want to insert this object in our DB
  DroneModel.create(req.body)
    .then((drone) => {
      console.log(`${drone.name} added`);
      //once its added redirect the user to the homepage
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("There is an error", err);
      res.redirect("/drones/create"); //just show the url you would like to redirect
    });
});


// GET route to show the form to update a single drone. It needs to show the current DB information.
router.get("/drones/:id/edit", (req, res, next) => {
  //let id = req.params.id;
  //better practice would be:
  const { id } = req.params;
  console.log("this is my req.paramas", req.params);
  console.log("this is my id", { id });

  // findById method will obtain the information of the drone to show in the update form view
  DroneModel.findById(id)
    .then((drone) => {
      console.log("Drone Edit", drone);
      res.render("drones/update-form.hbs", { drone });
    });
});


// POST route to update the drone element with the info updated in the form view
router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // let id = req.params.id;
  const { id } = req.params;

  // findByIdAndUpdate will use the information passed from the request body to update the drone
  DroneModel.findByIdAndUpdate(id, { $set: req.body })
    //after this task is complete, I want to redirect the page
    .then((drone) => {
      console.log(`Drone ${drone.name} updated`);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("There is an error", err);
      res.redirect("/drones/{{ drone._id }}/edit"); //just show the url you would like to redirect
    });
});


router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params

  // findByIdAndDelete will delete the drone with the passed id
  DroneModel.findByIdAndDelete(id).then((drone) => {
    console.log(`Drone ${drone.name} deleted`);
    res.redirect("/drones");
  })
  .catch((err) => console.log(err));
});

module.exports = router;
