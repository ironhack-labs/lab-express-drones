const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// List all drones
router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render("drones/list", { drones });
    })
    .catch((error) => {
      console.error("Error fetching drones:", error);
      res.render("error", {
        errorMessage: "Failed to load drones",
        errorDetails: "There was an error retrieving the drones from the database.",
      });
    });
});

// Create drone - display form
router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form", { title: "Create Drone" });
});

// Create drone - process form
router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  // Validate required fields
  if (!name || !propellers || !maxSpeed) {
    return res.render("drones/create-form", {
      errorMessage: "All fields are required",
      drone: req.body,
    });
  }

  // Validate that propellers and maxSpeed are positive numbers
  if (propellers <= 0 || maxSpeed <= 0) {
    return res.render("drones/create-form", {
      errorMessage: "Propellers and Max Speed must be positive numbers",
      drone: req.body,
    });
  }

  // Create a new drone
  Drone.create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((error) => {
      console.error("Error creating drone:", error);
      res.render("error", {
        errorMessage: "Failed to create drone",
        errorDetails: "There was an error saving the drone to the database.",
      });
    });
});

// Update drone - display form
router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;

  Drone.findById(id)
    .then((drone) => {
      if (!drone) {
        return res.status(404).render("not-found");
      }
      res.render("drones/update-form", { drone, title: "Update Drone" });
    })
    .catch((error) => {
      console.error("Error fetching drone for update:", error);
      res.render("error", {
        errorMessage: "Failed to load drone for editing",
        errorDetails: "There was an error retrieving the drone from the database.",
      });
    });
});

// Update drone - process form
router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  // Validate required fields
  if (!name || !propellers || !maxSpeed) {
    return Drone.findById(id)
      .then((drone) => {
        res.render("drones/update-form", {
          errorMessage: "All fields are required",
          drone: { ...drone.toObject(), ...req.body, _id: id },
        });
      })
      .catch((error) => {
        console.error("Error during validation:", error);
        res.render("error", {
          errorMessage: "Validation error",
          errorDetails: "There was an error processing your request.",
        });
      });
  }

  // Validate that propellers and maxSpeed are positive numbers
  if (propellers <= 0 || maxSpeed <= 0) {
    return Drone.findById(id)
      .then((drone) => {
        res.render("drones/update-form", {
          errorMessage: "Propellers and Max Speed must be positive numbers",
          drone: { ...drone.toObject(), ...req.body, _id: id },
        });
      })
      .catch((error) => {
        console.error("Error during validation:", error);
        res.render("error", {
          errorMessage: "Validation error",
          errorDetails: "There was an error processing your request.",
        });
      });
  }

  // Update the drone
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((updatedDrone) => {
      if (!updatedDrone) {
        return res.status(404).render("not-found");
      }
      res.redirect("/drones");
    })
    .catch((error) => {
      console.error("Error updating drone:", error);
      res.render("error", {
        errorMessage: "Failed to update drone",
        errorDetails: "There was an error updating the drone in the database.",
      });
    });
});

// Delete drone
router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then((deletedDrone) => {
      if (!deletedDrone) {
        return res.status(404).render("not-found");
      }
      res.redirect("/drones");
    })
    .catch((error) => {
      console.error("Error deleting drone:", error);
      res.render("error", {
        errorMessage: "Failed to delete drone",
        errorDetails: "There was an error removing the drone from the database.",
      });
    });
});

// Get single drone details - must be after specific routes
router.get("/drones/:id", (req, res, next) => {
  const { id } = req.params;

  Drone.findById(id)
    .then((drone) => {
      if (!drone) {
        return res.status(404).render("not-found");
      }
      res.render("drones/drone-details", { drone, title: "Drone Details" });
    })
    .catch((error) => {
      console.error("Error fetching drone details:", error);
      res.render("error", {
        errorMessage: "Failed to load drone details",
        errorDetails: "There was an error retrieving the drone from the database.",
      });
    });
});

module.exports = router;
