const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// Test route to trigger error.hbs
router.get("/error", (req, res, next) => {
  // Attempt to find a drone with an invalid ID format to trigger a database error
  Drone.findById("invalid-id-format")
    .then((drone) => {
      res.render("drones/drone-details", { drone });
    })
    .catch((error) => {
      console.error("Test error:", error);
      res.render("error", {
        errorMessage: "This is a test error",
        errorDetails: "This error was triggered intentionally to test the error template.",
      });
    });
});

// Test route for database connection error
router.get("/db-error", (req, res, next) => {
  // Simulate a database connection error
  res.render("error", {
    errorMessage: "Database Connection Error",
    errorDetails: "Could not connect to the database. Please check your connection and try again.",
  });
});

// Test route for server error
router.get("/server-error", (req, res, next) => {
  // Simulate a server error
  res.render("error", {
    errorMessage: "Internal Server Error",
    errorDetails:
      "The server encountered an unexpected condition that prevented it from fulfilling the request.",
  });
});

// Test route for 404 not found
router.get("/not-found", (req, res, next) => {
  // Simulate a 404 not found error
  res.status(404).render("not-found");
});

// Index page for test routes
router.get("/", (req, res, next) => {
  res.render("test-index", {
    title: "Test Routes",
    tests: [
      { path: "/test/error", description: "Test database error handling" },
      { path: "/test/db-error", description: "Test database connection error" },
      { path: "/test/server-error", description: "Test server error" },
      { path: "/test/not-found", description: "Test 404 not found page" },
    ],
  });
});

module.exports = router;
