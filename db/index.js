// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const connectingDB      = () => {

    mongoose.connect("mongodb://localhost:27017/lab-express-drones", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Conectados a la base de datos")
    })
    .catch((e) => {
        console.log(e)
    })
}


module.exports = connectingDB