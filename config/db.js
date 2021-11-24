// Aqui se genera la conexion a DB mas no se pobla la base de datos

// 1. IMPORTACION DE MONGOOSE
const mongoose = require("mongoose")

const connectDB = async () => {
	await mongoose.connect("mongodb://Jaceves:javivi21@cluster0-shard-00-00.il3pp.mongodb.net:27017,cluster0-shard-00-01.il3pp.mongodb.net:27017,cluster0-shard-00-02.il3pp.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-vxo665-shard-0&authSource=admin&retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	console.log("Base de datos conectada")

}

module.exports = connectDB


