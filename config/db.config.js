const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const MONGODB_URI = "mongodb://127.0.0.1/lab-express-drones";

module.exports.connect = (app) => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected");
      app;
    })
    .catch((error) => console.log(error));
};

module.exports.disconnect = () => {
  mongoose
    .disconnect(MONGODB_URI)
    .then(() => console.log("MongoDB disconnected"))
    .catch((error) => console.log(error));
};
