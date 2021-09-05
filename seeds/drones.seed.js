// Iteration #1
const Drone = require("../models/Drone.model");

// - Create an array of 3 objects, each with `name`, `propellers` and `maxSpeed` as our initial drones.

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

// - Establish a connection to the database. You can use the same code in `db/index.js`.

// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return Drone.deleteMany()
  })
  .then((x) => {
    console.log("Seeding the DB");
    // - Once the database connection is established, call the `Drone` model's `.create()` method with the array as an argument.
    Drone.create(drones).then(() => {
      console.log(`${drones.length} drones created`);
      mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error creating drones: ", err);
      });
    ;
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

// - If the `.create()` method successfully creates the _drones_ collection, output (using _console.log()_) how many drones have been created. In case, the seeding of the database fails, catch the error and output it.
