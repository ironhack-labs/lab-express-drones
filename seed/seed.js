const dataBase = require("../config/db.config");

const droneModel = require("../models/drones.model");

const drones = require("./drones");

const processModel = () => {
  droneModel
    .deleteMany()
    .then(() => {
      droneModel
        .create(drones)
        .then(() => {
          console.log("The Database has been seeded");
          dataBase.disconnect();
        })
        .catch((error) => {
          {
            console.log(`The Database has not been seeded: ${error}`);
            dataBase.disconnect();
          }
        });
    })
    .catch((error) => {
      {
        console.log(`The Database has not been deleted: ${error}`);
        dataBase.disconnect();
      }
    });
};

const seed = () => {
  dataBase.connect(processModel());
};

seed();

// Antes de hacer Commit, probar si renderiza
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);

// const MONGODB_URI = "mongodb://localhost/lab-express-drones";

// const droneModel = require("../models/drones.model");

// const drones = require("./drones");

// const seed = () => {
//   mongoose
//     .connect(MONGODB_URI)
//     .then(() => {
//       console.log("MongoDB connected");

//       droneModel
//         .create(drones)
//         .then(() => {
//           console.log("The Database has been seeded");

//           mongoose
//             .disconnect(MONGODB_URI)
//             .then(() => console.log("MongoDB disconnected"))
//             .catch((error) => console.log(error));
//         })
//         .catch((error) => console.log(`The Database has not been seeded: ${error}`));
//     })
//     .catch((error) => console.log(error));
// };

// seed();
