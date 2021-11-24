// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://martingiuradev:CfSh7re1LUAfynDk@cluster0-shard-00-00.pk3s0.mongodb.net:27017,cluster0-shard-00-01.pk3s0.mongodb.net:27017,cluster0-shard-00-02.pk3s0.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11wtdf-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
