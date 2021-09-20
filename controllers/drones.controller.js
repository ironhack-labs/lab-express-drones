const Drone = require("./../models/Drone.model");
const moment = require("moment");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const listDrones = async (req, res) => {
  let dronesList = await Drone.find({});
  res.render("drones/list", {
    drones: dronesList,
  });
};

const showFormToAdd = async (req, res) => {
  res.render("drones/create-form");
};

const addDrone = async (req, res) => {
  addAndUpdated(req, res, true);
};

const showFormToEdit = async (req, res) => {
  let drone = await Drone.findById(req.params.id);
  res.render("drones/update-form", drone);
};

const updateDrone = async (req, res) => {
  let drone = await Drone.findById(req.params.id);
  addAndUpdated(req, res, false, drone.image);
};

const deleteDrone = async (req, res) => {
  let drone = await Drone.findById(req.params.id);
  await Drone.findByIdAndRemove(req.params.id);
  let pathRemove = path.join(__dirname, "..", "public" + drone.image);
  fs.unlinkSync(pathRemove);
  return res.redirect("/drones?deleted=true");
};

const addAndUpdated = async (req, res, add, pathToRemove) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const { name, propellers, maxSpeed } = fields;
    const oldPath = files.image.path;
    const newPath = path.join("/images") + "/" + files.image.name;
    const rawData = fs.readFileSync(oldPath);

    fs.writeFile(path.join(__dirname, "..", "public") + newPath, rawData, async (err) => {
      if (err) console.log(err);

      if (add) {
        let newDrone = new Drone({
          name: name,
          propellers: propellers,
          maxSpeed: maxSpeed,
          image: newPath,
          updated: moment(),
        });
        await newDrone.save();
        return res.redirect("/drones?added=true");
      } else {
        let updatedDrone = {
          name: name,
          propellers: propellers,
          maxSpeed: maxSpeed,
          image: newPath,
          updated: moment(),
        };
        let pathRemove = path.join(__dirname, "..", "public" + pathToRemove);
        fs.unlinkSync(pathRemove);
        await Drone.findByIdAndUpdate(req.params.id, updatedDrone);
        return res.redirect("/drones?updated=true");
      }
    });
  });
};

module.exports = {
  listDrones,
  showFormToAdd,
  addDrone,
  showFormToEdit,
  updateDrone,
  deleteDrone,
};
