// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

// create:
Drone.create(drones)
  .then((createdDrones) => {
    console.log(`Created ${createdDrones.length} in the DB`);
    //Disconnect from the database(after getting the books):
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));




  //ROUTE TO CREATE The drones:
// create route above the details route so that /create isn't caught as an : id param
router.get("/drones/create-form", (req, res, next) => {
    res.render("drones/create-form");
  });
  // In the POST method all the info goes to req.body
  router.post("/drones/create", (req, res, next) => {
    //console.log(req.body);
    const { name, propellers, maxSpeed } = req.body;
    Drone.create({ name, propellers, maxSpeed })
      .then(() => res.redirect("/drones"))
      .catch((err) => next(err));
  });