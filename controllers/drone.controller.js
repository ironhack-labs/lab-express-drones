const Drone = require("../models/Drone.model");

const getDrones = async (req, res) => {
  try {
    const drones = await Drone.find();
    res.render("drones/list", { drones });
  } catch (err) {
    next();
    return err;
  }
};

const getDrone = async (req, res) => {
  try {
    const { DroneId } = req.params;
    const drone = await Drone.findById(DroneId);
    console.log(drone);
    res.render("drones/update-form", { drone });
  } catch (err) {
    // next();
    // return err;
  }
};

const createDrone = async (req, res) => {
  try {
    await Drone.create(req.body);
    const drones = await Drone.find();
    console.log(drones);
    res.render("drones/list", { drones });
  } catch (err) {
    next();
    return err;
  }
};

const deleteDrone = async (req, res) => {
  try {
    const { DroneId } = req.params;
    console.log(DroneId);
    const removedDrone = await Drone.findByIdAndRemove(DroneId);
    console.log("removed Drone", removedDrone);
    res.redirect("/drones");
  } catch (err) {
    console.error(err);
  }
};

const updateDrone = async (req, res) => {
  try {
    const { DroneId } = req.params;
    const updatedDrone = await Drone.findByIdAndUpdate(DroneId, req.body, {
      new: true,
    });
    console.log("updeted Drone", updatedDrone);
    res.redirect(`/drones/${DroneId}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getDrones,
  getDrone,
  createDrone,
  deleteDrone,
  updateDrone,
};
