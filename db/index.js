// ℹ️ package responsible to make the connection with mongodb
  const mongoose = require('mongoose');

  const connectDB = async () => {
      await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });

      console.log('Base de datos conectada');
  };

  module.exports = connectDB;
